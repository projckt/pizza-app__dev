import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-checkout',
  styleUrl: 'v-checkout.css',
  shadow: true,
})
export class VCheckout {
  render() {
    return (
      <Host>
        Checkout
        <slot></slot>
      </Host>
    );
  }
}
