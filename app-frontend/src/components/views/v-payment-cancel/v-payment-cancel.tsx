import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-payment-cancel',
  styleUrl: 'v-payment-cancel.css',
  shadow: true,
})
export class VPaymentCancel {
  render() {
    return (
      <Host>
        <c-card>
          <e-text variant="display" theme="danger">
            Payment Failed
          </e-text>
          <l-spacer value={1}></l-spacer>
          <e-text>
            Please try purchasing again. If money was deducted <br />
            from your account/card, kindly write a mail to us at:
          </e-text>
          <e-link href="mailto:aitihya.webmaster@gmail.com">
            <strong>aitihya.webmaster@gmail.com</strong>
          </e-link>
        </c-card>
      </Host>
    );
  }
}
