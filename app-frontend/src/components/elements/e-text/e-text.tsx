import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'e-text',
  styleUrl: 'e-text.css',
  shadow: true,
})
export class EText {
  @Prop() variant: string;

  render() {
    if (this.variant === 'display') {
      return (
        <h1 class="text--display">
          <slot></slot>
        </h1>
      );
    } else if (this.variant === 'heading') {
      return (
        <h2 class="text--heading">
          <slot />
        </h2>
      );
    } else if (this.variant === 'subHeading') {
      return (
        <h3 class="text--subHeading">
          <slot />
        </h3>
      );
    } else if (this.variant === 'footnote') {
      <p class="text--footnote">
        <slot />
      </p>;
    } else if (this.variant === 'label') {
      <p class="text--label">
        <slot />
      </p>;
    } else {
      return (
        <p class="text--body">
          <slot />
        </p>
      );
    }
  }
}
