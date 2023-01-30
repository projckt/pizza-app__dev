import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-store',
  styleUrl: 'v-store.css',
  shadow: true,
})
export class VStore {
  render() {
    return (
      <Host>
        Store
        <slot></slot>
      </Host>
    );
  }
}
