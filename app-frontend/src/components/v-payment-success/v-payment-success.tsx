import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-payment-success',
  styleUrl: 'v-payment-success.css',
  shadow: true,
})
export class VPaymentSuccess {
  render() {
    return (
      <Host>
        Payment Success
        <slot></slot>
      </Host>
    );
  }
}
