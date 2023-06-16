import { Component, Event, EventEmitter, Prop, State, h, Host, Listen, FunctionalComponent } from '@stencil/core';
import { MatchResults, RouterHistory, injectHistory } from '@stencil/router';

import { helper_Generate_Get_Reader_Payload, helper_ApiCall_Get_Reader } from './helpers';

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
      this.isFetched_PdfFile = false;
      // this.fetchReader
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
  private timer_CheckSocket: any;

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
    if (IO) {
      if (IO.id) {
        this.fetch_Reader();
      } else {
        this.check_IfExists_Socket();
      }
    } else {
      this.check_IfExists_Socket();
    }
  }

  check_IfExists_Socket() {
    this.timer_CheckSocket = setInterval(() => {
      if (IO) {
        if (IO.id) {
          clearInterval(this.timer_CheckSocket);
          this.fetch_Reader();
        } else {
          console.log('checking if socket established');
        }
      } else {
        console.log('checking if socket established');
      }
    }, 100);
  }

  async fetch_Reader() {
    let payload_Get_Reader: any = helper_Generate_Get_Reader_Payload(this.id_Document, this.no_Page, IO.id);
    let { success, message, payload } = await helper_ApiCall_Get_Reader(payload_Get_Reader);

    if (!success) {
      alert(message);
      this.event_RouteTo.emit({
        type: 'push',
        route: '/my-library',
        data: {},
      });
    }

    this.url_Document = payload.url_Page;

    if (!this.name_Publication) {
      this.name_Publication = payload.name_Publication;
    }
    if (!this.edition_Publication) {
      this.edition_Publication = payload.edition_Publication;
    }

    this.isFetched_PdfFile = true;
  }

  // UI_Reader: FunctionalComponent = () => (
  //   <l-row justifyContent="space-between">
  //     <div class="reader--panel">
  //       <header>
  //         <e-text>
  //           <strong>{this.name_Publication}</strong>
  //         </e-text>
  //         <e-text>{this.edition_Publication}</e-text>
  //       </header>
  //       <footer>
  //         <e-button action="fetch_Page" value={this.no_Page - 1} variant="reader" disabled={this.no_Page > 1 ? false : true}>
  //           &lt;
  //         </e-button>
  //         <l-spacer value={1} variant="horizontal"></l-spacer>
  //         <e-text>Page {this.no_Page}</e-text>
  //         <l-spacer value={1} variant="horizontal"></l-spacer>
  //         <e-button action="fetch_Page" value={this.no_Page + 1} variant="reader">
  //           &gt;
  //         </e-button>
  //       </footer>
  //     </div>
  //     {/* <embed src={this.isFetched_PdfFile && `${this.url_Document}#toolbar=0`}></embed> */}
  //     <embed src=""></embed>
  //   </l-row>
  // );

  UI_Reader_LeftPanel: FunctionalComponent = () => (
    <div class="ui__reader ui__reader__left-panel">
      <footer>
        <e-button action="fetch_Page" value={this.no_Page - 1} variant="reader" disabled={this.no_Page > 1 ? false : true}>
          &lt;
        </e-button>
        <e-text>{this.no_Page}</e-text>
        <e-button action="fetch_Page" value={this.no_Page + 1} variant="reader">
          &gt;
        </e-button>
      </footer>
    </div>
  );

  UI_Reader_RightPanel: FunctionalComponent = () => <div class="ui__reader ui__reader__right-panel"></div>;

  render() {
    return (
      <Host>
        <this.UI_Reader_LeftPanel></this.UI_Reader_LeftPanel>
        <this.UI_Reader_RightPanel></this.UI_Reader_RightPanel>
      </Host>
    );
  }
}

injectHistory(VReader);
