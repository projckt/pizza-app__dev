import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'e-link',
  styleUrl: 'e-link.css',
  shadow: true,
})
export class ELink {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
