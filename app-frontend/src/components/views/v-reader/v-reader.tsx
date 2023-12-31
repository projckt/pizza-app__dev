import { Component, Event, EventEmitter, Prop, State, h, Host, Listen } from '@stencil/core';
import { MatchResults, RouterHistory, injectHistory } from '@stencil/router';

import { helper_Generate_Reader_Init_Payload, helper_ApiCall_Reader_Init_Payload } from './helpers';

import { IO } from '../../../global/script';

@Component({
  tag: 'v-reader',
  styleUrl: 'v-reader.css',
  shadow: true,
})
export class VReader {
  @Listen('buttonClick') handle_ButtonClick(e) {
    if (e.detail.action === 'action_GoBack') {
      this.event_RouteTo.emit({
        type: 'goBack',
      });
    } else if (e.detail.action === 'action_OpenToc') {
      this.isOpen_Toc = true;
    } else if (e.detail.action === 'action_CloseToc') {
      this.isOpen_Toc = false;
    } else if (e.detail.action === 'action_OpenHelp') {
      this.isOpen_Help = true;
    } else if (e.detail.action === 'action_CloseHelp') {
      this.isOpen_Help = false;
    } else if (e.detail.action === 'action_PrevPage') {
      if (this.no_Page === 1) {
        return;
      }
      this.no_Page = this.no_Page - 1;
      this.get_Page();
    } else if (e.detail.action === 'action_NextPage') {
      if (this.no_Page === this.count_Pages) {
        return;
      }
      this.no_Page = this.no_Page + 1;
      this.get_Page();
    } else if (e.detail.action === 'action_ZoomOut') {
      if (this.scale_Embed <= 1) {
        return;
      }
      this.scale_Embed = this.scale_Embed - 0.15;
      this.el_Embed.style.transform = `scale(${this.scale_Embed})`;
    } else if (e.detail.action === 'action_ZoomIn') {
      if (this.scale_Embed >= 1.45) {
        return;
      }
      this.scale_Embed = this.scale_Embed + 0.15;
      this.el_Embed.style.transform = `scale(${this.scale_Embed})`;
    }
  }

  @Listen('event_LinkClick') handle_LinkClick(e) {
    if (e.detail.action === 'goTo_Page') {
      this.no_Page = parseInt(e.detail.value);
      this.isOpen_Toc = false;
      this.get_Page();
    } else if (e.detail.action === 'open_PagePrompt') {
      let input_FromPrompt: any = prompt('Enter page no', 'e.g. 65');
      if (!input_FromPrompt) {
        return;
      }
      if (isNaN(input_FromPrompt)) {
        return;
      }
      if (this.count_Pages < parseInt(input_FromPrompt)) {
        return;
      }
      this.no_Page = parseInt(input_FromPrompt);
      this.get_Page();
    }
  }

  @Listen('keydown', { target: 'window' })
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'ArrowLeft') {
      if (this.no_Page === 1) {
        return;
      }
      this.no_Page = this.no_Page - 1;
      this.get_Page();
    } else if (ev.key === 'ArrowRight') {
      if (this.no_Page === this.count_Pages) {
        return;
      }
      this.no_Page = this.no_Page + 1;
      this.get_Page();
    } else if (ev.key === 'Escape') {
      console.log('esc');
      if (this.isVisible_ReaderUi) {
        this.hide_ReaderUi();
      } else {
        this.show_ReaderUi();
      }
    }
  }

  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;
  @Event({
    eventName: 'event_RouteTo',
    bubbles: true,
  })
  event_RouteTo: EventEmitter;

  @State() isFetched_ReaderData: boolean = false;
  @State() no_Page: number = 1;
  @State() isOpen_Toc: boolean = false;
  @State() isOpen_Help: boolean = false;
  @State() isVisible_ReaderUi: boolean = true;
  @State() base64Str_Page: string = '';
  @State() scale_Embed: number = 1;

  private id_Document: string = '';
  private title_Publication: string = '';
  private edition_Publication: string = '';
  private title_Document: string = '';
  private count_Pages: number = 0;
  private toc: any;

  el_Embed!: HTMLEmbedElement;

  componentWillLoad() {
    if (!this.match.params.id_Document) {
      this.event_RouteTo.emit({
        type: 'push',
        route: '/my-library',
        data: {},
      });
    }
    this.id_Document = this.match.params.id_Document.trim();
  }

  componentDidLoad() {
    this.get_Page();
  }

  async get_Page() {
    let payload_get_Page: any = helper_Generate_Reader_Init_Payload(this.id_Document, this.no_Page, IO.id);
    let { success, message, payload } = await helper_ApiCall_Reader_Init_Payload(payload_get_Page);

    if (!success) {
      alert(message);
      this.event_RouteTo.emit({
        type: 'push',
        route: '/my-library',
        data: {},
      });
    }

    this.title_Publication = payload.title_Publication;
    this.edition_Publication = payload.edition_Publication;
    this.title_Document = payload.title_Document;
    this.count_Pages = payload.count_Pages;
    this.toc = payload.toc;
    this.base64Str_Page = payload.base64Str_Page;
    this.isFetched_ReaderData = true;
  }

  hide_ReaderUi() {
    if (this.isOpen_Help || this.isOpen_Toc) {
      return;
    }
    this.isVisible_ReaderUi = false;
  }

  show_ReaderUi() {
    this.isVisible_ReaderUi = true;
  }

  render() {
    return (
      <Host>
        {this.isOpen_Toc || this.isOpen_Help ? <div class="sub-window__background"></div> : ''}
        {this.isOpen_Toc && (
          <div class="sub-window__content">
            <header>
              <e-button variant="transparent--white" action="action_CloseToc">
                {' '}
                <ion-icon name="close-outline"></ion-icon>{' '}
              </e-button>
            </header>
            <main>
              <e-text variant="display" theme="light">
                Table of Contents
              </e-text>
              <e-text theme="light">
                {this.title_Publication}, {this.edition_Publication} - {this.title_Document}
              </e-text>
              <l-spacer value={2}></l-spacer>
              {this.toc.length > 0 ? (
                <e-list>
                  {this.toc.map((item: any) =>
                    item.type === 'article' ? (
                      <e-list-item>
                        <l-row justifyContent="space-between" align="flex-start">
                          <div class="toc__item--1">
                            <e-link action="goTo_Page" event={true} value={item.page}>
                              <e-text>
                                <strong>{item.title}</strong>
                              </e-text>
                              <e-text>Authors: {item.author}</e-text>
                            </e-link>
                          </div>
                          <e-text theme="light">{item.page}</e-text>
                        </l-row>
                      </e-list-item>
                    ) : (
                      <div class="toc__seperator">
                        <e-text theme="light">{item.title.toUpperCase()}</e-text>
                      </div>
                    ),
                  )}
                </e-list>
              ) : (
                <e-text theme="light">
                  This document <strong>does not have</strong> a table of contents
                </e-text>
              )}
            </main>
          </div>
        )}
        {this.isOpen_Help && (
          <div class="sub-window__content">
            <header>
              <e-button variant="transparent--white" action="action_CloseHelp">
                {' '}
                <ion-icon name="close-outline"></ion-icon>{' '}
              </e-button>
            </header>
            <main>
              <e-text variant="display" theme="light">
                Instructions
              </e-text>
              <l-spacer value={2}></l-spacer>
              <e-list>
                <div class="toc__seperator">
                  <e-text theme="light">PAGE NAVIGATION & ZOOM</e-text>
                </div>
                <e-list-item>
                  <e-text theme="light">
                    Press <ion-icon name="arrow-forward-outline"></ion-icon> arrow key for next page
                  </e-text>
                </e-list-item>
                <e-list-item>
                  <e-text theme="light">
                    Press <ion-icon name="arrow-back-outline"></ion-icon> arrow key for previous page
                  </e-text>
                </e-list-item>
                <div class="toc__seperator">
                  <e-text theme="light">FOCUSED READING MODE</e-text>
                </div>
                <e-list-item>
                  <e-text theme="light">
                    Press <strong>ESC</strong> key to enter focused reading mode. It will hide the interface elements for an optimal reading experience. To exit this mode, press
                    ESC key again.
                  </e-text>
                </e-list-item>
              </e-list>
            </main>
          </div>
        )}
        <header class={!this.isVisible_ReaderUi && 'hide'}>
          <e-button variant="transparent--white" action="action_GoBack">
            {' '}
            <ion-icon name="arrow-back-outline"></ion-icon>
          </e-button>
          <l-row>
            <e-button variant="transparent--white" action="action_OpenHelp">
              {' '}
              <ion-icon name="information-circle-outline"></ion-icon>{' '}
            </e-button>
            <e-button variant="transparent--white" action="action_OpenToc">
              {' '}
              <ion-icon name="list-outline"></ion-icon>
            </e-button>
          </l-row>
        </header>
        {this.isFetched_ReaderData && (
          <embed
            src={`data:application/pdf;base64,${this.base64Str_Page}#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf`}
            ref={el => (this.el_Embed = el as HTMLEmbedElement)}
          ></embed>
        )}
        <footer class={!this.isVisible_ReaderUi && 'hide'}>
          <div class="ui-controls">
            <div class="ui-controls__page-controls">
              <e-button variant="transparent--white" action="action_PrevPage" disabled={this.no_Page === 1 ? true : false}>
                {' '}
                <ion-icon name="chevron-back-outline"></ion-icon>
              </e-button>
              &nbsp; &nbsp;
              <e-link action="open_PagePrompt" event={true}>
                {this.no_Page} / {this.count_Pages}
              </e-link>
              &nbsp; &nbsp;
              <e-button variant="transparent--white" action="action_NextPage" disabled={this.no_Page === this.count_Pages ? true : false}>
                {' '}
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </e-button>
            </div>
            <div class="ui-controls__zoom-controls">
              <e-button variant="transparent--white" action="action_ZoomOut" disabled={this.scale_Embed <= 1 ? true : false}>
                {' '}
                <ion-icon name="remove-circle-outline"></ion-icon>{' '}
              </e-button>
              &nbsp;
              <e-button variant="transparent--white" action="action_ZoomIn" disabled={this.scale_Embed >= 1.45 ? true : false}>
                {' '}
                <ion-icon name="add-circle-outline"></ion-icon>{' '}
              </e-button>
            </div>
          </div>
        </footer>
      </Host>
    );
  }
}

injectHistory(VReader);
