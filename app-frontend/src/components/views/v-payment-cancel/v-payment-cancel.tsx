import { Component, Event, EventEmitter, Host, Listen, h } from '@stencil/core';

@Component({
  tag: 'v-payment-cancel',
  styleUrl: 'v-payment-cancel.css',
  shadow: true,
})
export class VPaymentCancel {
  @Event({
    eventName: 'event_RouteTo',
    bubbles: true,
  })
  event_RouteTo: EventEmitter;

  @Listen('event_LinkClick') handle_LinkClick(e) {
    if (e.detail.action === 'store') {
      this.event_RouteTo.emit({
        type: 'push',
        route: '/store',
        data: {},
      });
    }
  }

  render() {
    return (
      <Host>
        <c-card>
          {/* <e-text variant="display" theme="danger">
            Payment Failed
          </e-text> */}
          <h1 class="text--danger">Payment Failed</h1>
          <l-spacer value={1}></l-spacer>
          <e-text>
            Please try purchasing again. If money was deducted <br />
            from your account/card, kindly write a mail to us at:
          </e-text>
          <e-link href="mailto:aitihya.webmaster@gmail.com">
            <strong>aitihya.webmaster@gmail.com</strong>
          </e-link>
          <l-spacer value={1}></l-spacer>
          <e-link action="store" event={true}>
            <strong>Go to store</strong>
          </e-link>
        </c-card>
      </Host>
    );
  }
}
