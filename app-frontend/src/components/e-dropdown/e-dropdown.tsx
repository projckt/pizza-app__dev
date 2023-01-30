import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'e-dropdown',
  styleUrl: 'e-dropdown.css',
  shadow: true,
})
export class EDropdown {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
