import { Component, Host, FunctionalComponent, Prop, h } from '@stencil/core';

@Component({
  tag: 'p-item-doc',
  styleUrl: 'p-item-doc.css',
  shadow: true,
})
export class PItemDoc {
  @Prop() id: string = '';
  @Prop() title: string = '';
  @Prop() sub_Title: string = '';
  @Prop() description: string = '';
  @Prop() currency: string = '';
  @Prop() action: string = '';
  @Prop() price: number = 0;
  @Prop() isSkel: boolean = false;

  ReadControls: FunctionalComponent = () => (
    <l-row justifyContent="space-between">
      <div></div>
      <e-button action="openReader">Read</e-button>
    </l-row>
  );

  BuyControls: FunctionalComponent = () => (
    <div>
      <l-spacer value={0.5}></l-spacer>
      <l-row justifyContent="space-between">
        <div>
          <e-text>{this.description}</e-text>
          <e-text variant="footnote">
            <e-link>Read Abstracts</e-link>
          </e-text>
        </div>
        <div>
          <e-text variant="subHeading">
            {this.currency}
            {this.price}
          </e-text>
          <e-button action="goToCheckout" value={this.id}>
            Buy
          </e-button>
        </div>
      </l-row>
      <l-spacer value={1}></l-spacer>
    </div>
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
