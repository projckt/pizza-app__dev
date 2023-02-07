import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-reader',
  styleUrl: 'v-reader.css',
  shadow: true,
})
export class VReader {
  render() {
    return (
      <Host>
        Reader
        <slot></slot>
      </Host>
    );
  }
}
