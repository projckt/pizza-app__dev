import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'e-text',
  styleUrl: 'e-text.css',
  shadow: true,
})
export class EText {
  @Prop() variant: string = 'body';
  @Prop() theme: string = 'default';

  private styleClasses: string;

  componentWillLoad() {
    this.generate_StyleClasses();
  }

  generate_StyleClasses() {
    this.styleClasses = `${this.variant} ${this.theme}`;
  }

  render() {
    if (this.variant === 'display') {
      return (
        <h1 class={this.styleClasses}>
          <slot></slot>
        </h1>
      );
    } else if (this.variant === 'heading') {
      return (
        <h2 class={this.styleClasses}>
          <slot />
        </h2>
      );
    } else if (this.variant === 'subHeading') {
      return (
        <h3 class={this.styleClasses}>
          <slot />
        </h3>
      );
    } else {
      return (
        <p class={this.styleClasses}>
          <slot />
        </p>
      );
    }
  }
}
