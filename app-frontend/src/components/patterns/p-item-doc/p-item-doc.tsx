import { Component, Host, FunctionalComponent, Prop, h } from '@stencil/core';

@Component({
  tag: 'p-item-doc',
  styleUrl: 'p-item-doc.css',
  shadow: true,
})
export class PItemDoc {
  @Prop() title: string;
  @Prop() sub_Title: string;
  @Prop() action: string;
  @Prop() isSkel: boolean = false;

  ReadControls: FunctionalComponent = () => (
    <l-row justifyContent="space-between">
      <div></div>
      <e-button action="openReader">Read</e-button>
    </l-row>
  );

  BuyControls: FunctionalComponent = () => (
    <l-row justifyContent="space-between">
      <e-link>Read Abstract</e-link>
      <e-button action="goToCheckout">Buy</e-button>
    </l-row>
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
      <footer>{this.action === 'buy' ? <this.BuyControls></this.BuyControls> : <this.ReadControls></this.ReadControls>}</footer>
    </div>
  );

  render() {
    return <Host>{this.isSkel ? <this.ui_Skel></this.ui_Skel> : <this.ui_Default></this.ui_Default>}</Host>;
  }
}
