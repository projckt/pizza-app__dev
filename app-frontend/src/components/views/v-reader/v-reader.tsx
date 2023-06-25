import { Component, Event, EventEmitter, Prop, State, h, Host, Listen, FunctionalComponent } from '@stencil/core';
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
    if (e.detail.action === 'fetch_Page') {
      this.no_Page = e.detail.value;
      this.isFetched_ReaderData = false;
      // this.fetchReader
    } else if (e.detail.action === 'action_GoBack') {
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
      console.log('prev page');
    } else if (e.detail.action === 'action_NextPage') {
      console.log('next page');
    } else if (e.detail.action === 'action_ZoomOut') {
      console.log('zoom out');
    } else if (e.detail.action === 'action_ZoomIn') {
      console.log('zoom in');
    }
  }

  @Listen('keydown', { target: 'window' })
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'ArrowDown') {
      console.log('Zoom out');
    } else if (ev.key === 'ArrowUp') {
      console.log('Zoom in');
    } else if (ev.key === 'ArrowLeft') {
      console.log('Prev page');
    } else if (ev.key === 'ArrowRight') {
      console.log('Next page');
    } else if (ev.key === 'Escape') {
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

  private id_Document: string = '';
  private title_Publication: string = '';
  private edition_Publication: string = '';
  private title_Document: string = '';
  private count_Document_Pages: number = 0;
  private toc: any;
  private base64Str_Page: string = '';

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
    this.init_Reader();
  }

  async init_Reader() {
    let payload_Init_Reader: any = helper_Generate_Reader_Init_Payload(this.id_Document, this.no_Page, IO.id);
    let { success, message, payload } = await helper_ApiCall_Reader_Init_Payload(payload_Init_Reader);

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
    this.toc = payload.toc;
    this.count_Document_Pages = payload.count_Document_Pages;
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
              <l-spacer value={2}></l-spacer>
              <e-list>
                <div class="toc__seperator">
                  <e-text theme="light">ENGLISH SECTION</e-text>
                </div>
                <e-list-item>
                  <e-link action="settings" event={true}>
                    <e-text>
                      <strong>
                        {' '}
                        This is a test article name. This is a test article name. This is a test article name. This is a test article name. This is a test article name. This is a
                        test article name
                      </strong>{' '}
                      - AUTHOR NAME
                    </e-text>
                  </e-link>
                </e-list-item>
                <e-list-item>
                  <e-link action="settings" event={true}>
                    <e-text>
                      <strong>
                        {' '}
                        This is a test article name. This is a test article name. This is a test article name. This is a test article name. This is a test article name. This is a
                        test article name
                      </strong>{' '}
                      - AUTHOR NAME
                    </e-text>
                  </e-link>
                </e-list-item>
                <e-list-item>
                  <e-link action="settings" event={true}>
                    <e-text>
                      <strong>
                        {' '}
                        This is a test article name. This is a test article name. This is a test article name. This is a test article name. This is a test article name. This is a
                        test article name
                      </strong>{' '}
                      - AUTHOR NAME
                    </e-text>
                  </e-link>
                </e-list-item>
                <e-list-item>
                  <e-link action="settings" event={true}>
                    <e-text>
                      <strong>
                        {' '}
                        This is a test article name. This is a test article name. This is a test article name. This is a test article name. This is a test article name. This is a
                        test article name
                      </strong>{' '}
                      - AUTHOR NAME
                    </e-text>
                  </e-link>
                </e-list-item>
                <e-list-item>
                  <e-link action="settings" event={true}>
                    <e-text>
                      <strong>
                        {' '}
                        This is a test article name. This is a test article name. This is a test article name. This is a test article name. This is a test article name. This is a
                        test article name
                      </strong>{' '}
                      - AUTHOR NAME
                    </e-text>
                  </e-link>
                </e-list-item>
                <div class="toc__seperator">
                  <e-text theme="light">ASSAMESE SECTION</e-text>
                </div>
                <e-list-item>
                  <e-link action="settings" event={true}>
                    <e-text>
                      <strong>
                        এইটো এটা পৰীক্ষামূলক প্ৰবন্ধৰ নাম। এইটো এটা পৰীক্ষামূলক প্ৰবন্ধৰ নাম। এইটো এটা পৰীক্ষামূলক প্ৰবন্ধৰ নাম। এইটো এটা পৰীক্ষামূলক প্ৰবন্ধৰ নাম। এইটো এটা
                        পৰীক্ষামূলক প্ৰবন্ধৰ নাম। এইটো এটা পৰীক্ষামূলক প্ৰবন্ধৰ নাম
                      </strong>{' '}
                      - লেখকৰ নাম
                    </e-text>
                  </e-link>
                </e-list-item>
                <e-list-item>
                  <e-link action="settings" event={true}>
                    <e-text>
                      <strong>
                        এইটো এটা পৰীক্ষামূলক প্ৰবন্ধৰ নাম। এইটো এটা পৰীক্ষামূলক প্ৰবন্ধৰ নাম। এইটো এটা পৰীক্ষামূলক প্ৰবন্ধৰ নাম। এইটো এটা পৰীক্ষামূলক প্ৰবন্ধৰ নাম। এইটো এটা
                        পৰীক্ষামূলক প্ৰবন্ধৰ নাম। এইটো এটা পৰীক্ষামূলক প্ৰবন্ধৰ নাম
                      </strong>{' '}
                      - লেখকৰ নাম
                    </e-text>
                  </e-link>
                </e-list-item>
                <e-list-item>
                  <e-link action="settings" event={true}>
                    <e-text>
                      <strong>
                        এইটো এটা পৰীক্ষামূলক প্ৰবন্ধৰ নাম। এইটো এটা পৰীক্ষামূলক প্ৰবন্ধৰ নাম। এইটো এটা পৰীক্ষামূলক প্ৰবন্ধৰ নাম। এইটো এটা পৰীক্ষামূলক প্ৰবন্ধৰ নাম। এইটো এটা
                        পৰীক্ষামূলক প্ৰবন্ধৰ নাম। এইটো এটা পৰীক্ষামূলক প্ৰবন্ধৰ নাম
                      </strong>{' '}
                      - লেখকৰ নাম
                    </e-text>
                  </e-link>
                </e-list-item>
                <e-list-item>
                  <e-link action="settings" event={true}>
                    <e-text>
                      <strong>
                        এইটো এটা পৰীক্ষামূলক প্ৰবন্ধৰ নাম। এইটো এটা পৰীক্ষামূলক প্ৰবন্ধৰ নাম। এইটো এটা পৰীক্ষামূলক প্ৰবন্ধৰ নাম। এইটো এটা পৰীক্ষামূলক প্ৰবন্ধৰ নাম। এইটো এটা
                        পৰীক্ষামূলক প্ৰবন্ধৰ নাম। এইটো এটা পৰীক্ষামূলক প্ৰবন্ধৰ নাম
                      </strong>{' '}
                      - লেখকৰ নাম
                    </e-text>
                  </e-link>
                </e-list-item>
                <e-list-item>
                  <e-link action="settings" event={true}>
                    <e-text>
                      <strong>
                        এইটো এটা পৰীক্ষামূলক প্ৰবন্ধৰ নাম। এইটো এটা পৰীক্ষামূলক প্ৰবন্ধৰ নাম। এইটো এটা পৰীক্ষামূলক প্ৰবন্ধৰ নাম। এইটো এটা পৰীক্ষামূলক প্ৰবন্ধৰ নাম। এইটো এটা
                        পৰীক্ষামূলক প্ৰবন্ধৰ নাম। এইটো এটা পৰীক্ষামূলক প্ৰবন্ধৰ নাম
                      </strong>{' '}
                      - লেখকৰ নাম
                    </e-text>
                  </e-link>
                </e-list-item>
                <div class="toc__seperator">
                  <e-text theme="light">BENGALI SECTION</e-text>
                </div>
                <e-list-item>
                  <e-link action="settings" event={true}>
                    <e-text>
                      <strong>
                        এটি একটি পরীক্ষা নিবন্ধের নাম। এটি একটি পরীক্ষা নিবন্ধের নাম। এটি একটি পরীক্ষা নিবন্ধের নাম। এটি একটি পরীক্ষা নিবন্ধের নাম। এটি একটি পরীক্ষা নিবন্ধের নাম।
                        এটি একটি পরীক্ষা নিবন্ধের নাম
                      </strong>{' '}
                      - লেখকের নাম
                    </e-text>
                  </e-link>
                </e-list-item>
                <e-list-item>
                  <e-link action="settings" event={true}>
                    <e-text>
                      <strong>
                        এটি একটি পরীক্ষা নিবন্ধের নাম। এটি একটি পরীক্ষা নিবন্ধের নাম। এটি একটি পরীক্ষা নিবন্ধের নাম। এটি একটি পরীক্ষা নিবন্ধের নাম। এটি একটি পরীক্ষা নিবন্ধের নাম।
                        এটি একটি পরীক্ষা নিবন্ধের নাম
                      </strong>{' '}
                      - লেখকের নাম
                    </e-text>
                  </e-link>
                </e-list-item>
                <e-list-item>
                  <e-link action="settings" event={true}>
                    <e-text>
                      <strong>
                        এটি একটি পরীক্ষা নিবন্ধের নাম। এটি একটি পরীক্ষা নিবন্ধের নাম। এটি একটি পরীক্ষা নিবন্ধের নাম। এটি একটি পরীক্ষা নিবন্ধের নাম। এটি একটি পরীক্ষা নিবন্ধের নাম।
                        এটি একটি পরীক্ষা নিবন্ধের নাম
                      </strong>{' '}
                      - লেখকের নাম
                    </e-text>
                  </e-link>
                </e-list-item>
                <e-list-item>
                  <e-link action="settings" event={true}>
                    <e-text>
                      <strong>
                        এটি একটি পরীক্ষা নিবন্ধের নাম। এটি একটি পরীক্ষা নিবন্ধের নাম। এটি একটি পরীক্ষা নিবন্ধের নাম। এটি একটি পরীক্ষা নিবন্ধের নাম। এটি একটি পরীক্ষা নিবন্ধের নাম।
                        এটি একটি পরীক্ষা নিবন্ধের নাম
                      </strong>{' '}
                      - লেখকের নাম
                    </e-text>
                  </e-link>
                </e-list-item>
                <e-list-item>
                  <e-link action="settings" event={true}>
                    <e-text>
                      <strong>
                        এটি একটি পরীক্ষা নিবন্ধের নাম। এটি একটি পরীক্ষা নিবন্ধের নাম। এটি একটি পরীক্ষা নিবন্ধের নাম। এটি একটি পরীক্ষা নিবন্ধের নাম। এটি একটি পরীক্ষা নিবন্ধের নাম।
                        এটি একটি পরীক্ষা নিবন্ধের নাম
                      </strong>{' '}
                      - লেখকের নাম
                    </e-text>
                  </e-link>
                </e-list-item>
              </e-list>
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
        {this.isFetched_ReaderData && <embed src={`data:application/pdf;base64,${this.base64Str_Page}#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf`}></embed>}
        <footer class={!this.isVisible_ReaderUi && 'hide'}>
          <div class="ui-controls">
            <div class="ui-controls__page-controls">
              <e-button variant="transparent--white" action="action_PrevPage">
                {' '}
                <ion-icon name="chevron-back-outline"></ion-icon>
              </e-button>
              &nbsp; &nbsp;
              <e-text>99 / 100</e-text>
              &nbsp; &nbsp;
              <e-button variant="transparent--white" action="action_NextPage">
                {' '}
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </e-button>
            </div>
            <div class="ui-controls__zoom-controls">
              <e-button variant="transparent--white" action="action_ZoomOut">
                {' '}
                <ion-icon name="remove-circle-outline"></ion-icon>{' '}
              </e-button>
              &nbsp;
              <e-button variant="transparent--white" action="action_ZoomIn">
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
