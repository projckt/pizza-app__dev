import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-payment-handle',
  styleUrl: 'v-payment-handle.css',
  shadow: true,
})
export class VPaymentHandle {
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
          <e-link href="/my-library">
            <strong>Go to library</strong>
          </e-link>
        </c-card>
      </Host>
    );
  }
}
