import { Component, Event, EventEmitter, Prop, State, Host, h } from '@stencil/core';
import { MatchResults, RouterHistory, injectHistory } from '@stencil/router';

import { helper_Generate_GetReading_Payload, helper_ApiCall_Get_Reading } from './helpers';

@Component({
  tag: 'v-reader',
  styleUrl: 'v-reader.css',
  shadow: true,
})
export class VReader {
  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;
  @Event({
    eventName: 'event_RouteTo',
    bubbles: true,
  })
  event_RouteTo: EventEmitter;

  @State() isFetched_PdfFile: boolean = false;

  el_Canvas!: HTMLCanvasElement;
  el_WebViewer!: HTMLDivElement;

  private id_Document: string = '';
  private url_Document: string = '';

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
    this.fetch_ViewData();
  }

  async fetch_ViewData() {
    let payload_GetReading: any = helper_Generate_GetReading_Payload(this.id_Document);
    let { success, message, payload } = await helper_ApiCall_Get_Reading(payload_GetReading);
    if (!success) {
      alert(message);
      this.event_RouteTo.emit({
        type: 'push',
        route: '/my-library',
        data: {},
      });
    }

    this.url_Document = payload.url_Doc;
    this.isFetched_PdfFile = true;
  }

  render() {
    return (
      <Host>
        <embed src={this.url_Document} width="800" height="500"></embed>
      </Host>
    );
  }
}

injectHistory(VReader);
