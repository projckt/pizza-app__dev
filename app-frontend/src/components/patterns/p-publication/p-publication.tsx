import { Component, Host, FunctionalComponent, Prop, h } from '@stencil/core';

@Component({
  tag: 'p-publication',
  styleUrl: 'p-publication.css',
  shadow: true,
})
export class PPublication {
  @Prop() id: string = '';
  @Prop() title: string = '';
  @Prop() sub_Title: string = '';
  @Prop() description: string = '';
  @Prop() url_Sample: string = '';
  @Prop() url_Toc: string = '';
  @Prop() url_Cover: string = '';
  @Prop() isSkel: boolean = false;

  BuyControls: FunctionalComponent = () => (
    <footer>
      <l-spacer value={0.75}></l-spacer>
      <e-text>{this.description}</e-text>
      <l-row>
        <e-text variant="footnote">
          <e-link>Contents</e-link>
        </e-text>
        <l-spacer variant="horizontal" value={0.5}></l-spacer>
        <e-text variant="footnote">
          <e-link>Abstracts</e-link>
        </e-text>
        <l-spacer variant="horizontal" value={0.5}></l-spacer>
        <e-text variant="footnote">
          <e-link>Cover</e-link>
        </e-text>
      </l-row>
      <l-spacer value={0.75}></l-spacer>
      <l-seperator></l-seperator>
      <l-spacer value={1}></l-spacer>
      <l-row justifyContent="space-between">
        <select>
          <option selected>Full edition</option>
          <option>Article 1</option>
          <option>Article 2</option>
        </select>
        <e-text>$10</e-text>
      </l-row>
      <l-spacer value={1}></l-spacer>
      <e-button action="goToCheckout" value={this.id} size="wide">
        Buy
      </e-button>
      <l-spacer value={1}></l-spacer>
    </footer>
  );

  ui_Skel: FunctionalComponent = () => <div class="item-doc--skel"></div>;

  ui_Default: FunctionalComponent = () => (
    <div>
      <header>
        <span>
          <e-text variant="subHeading">{this.title}</e-text>
          <e-text>{this.sub_Title}</e-text>
        </span>
      </header>
      <this.BuyControls></this.BuyControls>
    </div>
  );

  render() {
    return <Host>{this.isSkel ? <this.ui_Skel></this.ui_Skel> : <this.ui_Default></this.ui_Default>}</Host>;
  }
}
