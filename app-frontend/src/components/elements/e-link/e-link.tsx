import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'e-link',
  styleUrl: 'e-link.css',
  shadow: true,
})
export class ELink {
  @Prop() variant: string = 'default';
  @Prop() href: string = '';
  @Prop() target: string = '';
  @Prop() theme: string = 'default';

  private styleClasses: string = '';

  componentWillLoad() {
    this.generateStyles();
  }

  generateStyles() {
    if (this.variant === 'navLink') {
      this.styleClasses = this.styleClasses + ` nav__link`;
    } else if (this.variant === 'navLink_Active') {
      this.styleClasses = this.styleClasses + ` nav__link--active`;
    }

    if (this.theme === 'danger') {
      this.styleClasses = this.styleClasses + ` danger`;
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
