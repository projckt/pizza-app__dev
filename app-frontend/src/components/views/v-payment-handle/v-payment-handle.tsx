import { Component, Event, EventEmitter, Host, Listen, Prop, h } from '@stencil/core';
import { MatchResults, RouterHistory, injectHistory } from '@stencil/router';

@Component({
  tag: 'v-payment-handle',
  styleUrl: 'v-payment-handle.css',
  shadow: true,
})
export class VPaymentHandle {
  @Event({
    eventName: 'event_RouteTo',
    bubbles: true,
  })
  event_RouteTo: EventEmitter;

  @Listen('event_LinkClick') handle_LinkClick(e) {
    if (e.detail.action === 'myLibrary') {
      this.event_RouteTo.emit({
        type: 'push',
        route: '/my-library',
        data: {},
      });
    }
  }

  @Prop() match: MatchResults;
  @Prop() history: RouterHistory;

  private is_Session: string;

  componentWillLoad() {
    if (this.match.params.id_Session) {
      this.is_Session = this.match.params.id_Session.trim();
    }
    console.log(`this.is_Session: ${this.is_Session}`);
  }

  render() {
    return (
      <Host>
        <c-card>
          <e-text variant="display" theme="success">
            Payment Successful
          </e-text>
          <l-spacer value={1}></l-spacer>
          <e-text>
            Thank you for purchasing <strong>Aitihya, the Heritage - Vol XVIII, Issue 2</strong>
          </e-text>
          <e-text>It has been added to your library.</e-text>
          <l-spacer value={1}></l-spacer>
          <e-link action="myLibrary" event={true}>
            <strong>Go to library</strong>
          </e-link>
        </c-card>
      </Host>
    );
  }
}

injectHistory(VPaymentHandle);
