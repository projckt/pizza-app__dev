import { Component, Event, EventEmitter, Prop, State, h, Listen, FunctionalComponent } from '@stencil/core';
import { MatchResults, RouterHistory, injectHistory } from '@stencil/router';

import { helper_Generate_Get_Page_Payload, helper_ApiCall_Get_Page } from './helpers';

@Component({
  tag: 'v-reader',
  styleUrl: 'v-reader.css',
  shadow: true,
})
export class VReader {
  @Listen('buttonClick') handle_ButtonClick(e) {
    if (e.detail.action === 'fetch_Page') {
      this.no_Page = e.detail.value;
      this.isFetched_PdfFile = false;
      this.fetch_Page();
    }
  }

  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;
  @Event({
    eventName: 'event_RouteTo',
    bubbles: true,
  })
  event_RouteTo: EventEmitter;

  @State() isFetched_PdfFile: boolean = false;
  @State() no_Page: number = 1;

  el_Canvas!: HTMLCanvasElement;
  el_WebViewer!: HTMLDivElement;

  private id_Document: string = '';
  private url_Document: string = '';
  private name_Publication: string = '';
  private edition_Publication: string = '';

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
    this.fetch_Page();
  }

  async fetch_Page() {
    let payload_Get_Page: any = helper_Generate_Get_Page_Payload(this.id_Document, this.no_Page);
    let { success, message, payload } = await helper_ApiCall_Get_Page(payload_Get_Page);
    if (!success) {
      alert(message);
      this.event_RouteTo.emit({
        type: 'push',
        route: '/my-library',
        data: {},
      });
    }

    this.url_Document = payload.url_Page;
    this.name_Publication = payload.name_Publication;
    this.edition_Publication = payload.edition_Publication;

    this.isFetched_PdfFile = true;
  }

  UI_Reader: FunctionalComponent = () => (
    <l-row justifyContent="space-between">
      <div class="reader--panel">
        <header>
          <e-text>
            <strong>{this.name_Publication}</strong>
          </e-text>
          <e-text>{this.edition_Publication}</e-text>
        </header>
        <footer>
          <e-button action="fetch_Page" value={this.no_Page - 1} variant="reader" disabled={this.no_Page > 1 ? false : true}>
            &lt;
          </e-button>
          <l-spacer value={1} variant="horizontal"></l-spacer>
          <e-text>Page {this.no_Page}</e-text>
          <l-spacer value={1} variant="horizontal"></l-spacer>
          <e-button action="fetch_Page" value={this.no_Page + 1} variant="reader">
            &gt;
          </e-button>
        </footer>
      </div>
      <embed src={this.isFetched_PdfFile && `${this.url_Document}#toolbar=0`}></embed>
    </l-row>
  );

  render() {
    return <this.UI_Reader></this.UI_Reader>;
  }
}

injectHistory(VReader);
