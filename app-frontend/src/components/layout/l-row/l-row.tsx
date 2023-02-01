import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'l-row',
  styleUrl: 'l-row.css',
  shadow: true,
})
export class LRow {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
