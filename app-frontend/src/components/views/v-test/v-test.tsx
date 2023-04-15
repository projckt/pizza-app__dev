import { Component, State, Host, h } from '@stencil/core';

@Component({
  tag: 'v-test',
  styleUrl: 'v-test.css',
  shadow: true,
})
export class VTest {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
