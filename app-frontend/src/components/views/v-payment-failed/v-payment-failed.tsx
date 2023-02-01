import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-payment-failed',
  styleUrl: 'v-payment-failed.css',
  shadow: true,
})
export class VPaymentFailed {
  render() {
    return (
      <Host>
        Payment Failed
        <slot></slot>
      </Host>
    );
  }
}
