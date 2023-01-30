import { Component, Prop, Host, h } from '@stencil/core';

interface LooseObject {
  [key: string]: any;
}

@Component({
  tag: 'l-spacer',
  styleUrl: 'l-spacer.css',
  shadow: true,
})
export class LSpacer {
  @Prop() value: number = 1;

  private styleObj: LooseObject = {};

  componentWillLoad() {
    this.styleObj.marginTop = `${this.value}em`;
    this.styleObj.marginBottom = `${this.value}em`;
  }

  render() {
    return <Host style={this.styleObj}></Host>;
  }
}
