import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'c-sidebar',
  styleUrl: 'c-sidebar.css',
  shadow: true,
})
export class CSidebar {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
