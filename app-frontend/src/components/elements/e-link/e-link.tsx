import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'e-link',
  styleUrl: 'e-link.css',
  shadow: true,
})
export class ELink {
  @Prop() href: string = '';
  @Prop() target: string = '';
  @Prop() highlight: boolean = false;

  private styleClasses: string = '';

  componentWillLoad() {
    this.generateStyles();
  }

  generateStyles() {
    if (this.highlight) {
      this.styleClasses = this.styleClasses + ` highlight`;
    }
  }

  render() {
    return (
      <a class={this.styleClasses} href={this.href} target={this.target}>
        <slot></slot>
      </a>
    );
  }
}
