import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'p-reading',
  styleUrl: 'p-reading.css',
  shadow: true,
})
export class PReading {
  @Prop() id: string;
  @Prop() title: string;
  @Prop() edition: string;
  @Prop() document: string;

  render() {
    return (
      <Host>
        <div class="row-item__1">
          <e-text>{this.title}</e-text>
          <e-text variant="footnote">{this.edition}</e-text>
        </div>
        <div class="row-item__2">
          <e-text>{this.document}</e-text>
        </div>
        <e-button action="goToReader" value={this.id} size="wide">
          Read
        </e-button>
      </Host>
    );
  }
}
