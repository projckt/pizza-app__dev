import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'e-link',
  styleUrl: 'e-link.css',
  shadow: true,
})
export class ELink {
  @Prop() href: string = '';
  @Prop() target: string = '';

  render() {
    return (
      <a href={this.href} target={this.target}>
        <slot></slot>
      </a>
    );
  }
}
