import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'p-loader',
  styleUrl: 'p-loader.css',
  shadow: true,
})
export class PLoader {
  @Prop() variant: string = 'line';

  render() {
    if (this.variant === 'line') {
      return <div class="skel-line"></div>;
    } else if (this.variant === 'card') {
      return <div class="skel-card"></div>;
    }
  }
}
