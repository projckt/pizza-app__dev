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

  el_Canvas!: HTMLCanvasElement;
  el_WebViewer!: HTMLDivElement;

  private id_Document: string = '';
  private title_Publication: string = '';
  private edition_Publication: string = '';
  private title_Document: string = '';
  private count_Document_Pages: number = 0;
  private toc: any;
  private base64Str_Page: string = '';

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

  // componentDidLoad() {
  //   if (IO) {
  //     if (IO.id) {
  //       this.init_Reader();
  //     } else {
  //       this.check_IfExists_Socket();
  //     }
  //   } else {
  //     this.check_IfExists_Socket();
  //   }
  // }

  // check_IfExists_Socket() {
  //   this.timer_CheckSocket = setInterval(() => {
  //     if (IO) {
  //       if (IO.id) {
  //         clearInterval(this.timer_CheckSocket);
  //         this.init_Reader();
  //       } else {
  //         console.log('checking if socket established');
  //       }
  //     } else {
  //       console.log('checking if socket established');
  //     }
  //   }, 100);
  // }

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
      <header>
        <e-text>
          <strong>{this.title_Publication}</strong>
        </e-text>
        <e-text>{this.edition_Publication}</e-text>
      </header>
      <div class="toc">
        {this.isFetched_ReaderData && (
          <e-list>
            {this.toc.map(item =>
              item.type.toLowerCase() === 'section' ? (
                <div class="toc__section">
                  <e-text>{item.title}</e-text>
                </div>
              ) : (
                <e-list-item>
                  <e-link action="logout" event={true} value={item.page}>
                    <e-text>{item.title}</e-text>
                    <e-text variant="footnote">{item.author.toUpperCase()}</e-text>
                  </e-link>
                </e-list-item>
              ),
            )}
          </e-list>
        )}
      </div>
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
        <embed src={this.isFetched_ReaderData && `data:application/pdf;base64,${this.base64Str_Page}#toolbar=0&navpanes=0&scrollbar=0`} type="application/pdf"></embed>
        {/* <this.UI_Reader_LeftPanel></this.UI_Reader_LeftPanel>
        <this.UI_Reader_RightPanel></this.UI_Reader_RightPanel> */}
      </Host>
    );
  }
}

injectHistory(VReader);
