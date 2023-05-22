import { Component, Host, State, FunctionalComponent, Prop, Listen, h } from '@stencil/core';

@Component({
  tag: 'p-publication',
  styleUrl: 'p-publication.css',
  shadow: true,
})
export class PPublication {
  @Listen('event_selectInput') handle_SelectInput(e) {
    if (e.detail.name === 'select_Document') {
      this.id_Active_Document = e.detail.value;
    }
  }

  @Prop() id_Publication: string = '';
  @Prop() heading: string = '';
  @Prop() sub_Heading: string = '';
  @Prop() description: string = '';
  @Prop() url_Sample: string = '';
  @Prop() url_Toc: string = '';
  @Prop() url_Cover: string = '';
  @Prop() isSkel: boolean = false;
  @Prop() documents: any;

  @State() price_Active_Document: string;
  @State() id_Active_Document: string;

  ui_Skel: FunctionalComponent = () => <div class="item-doc--skel"></div>;

  ui_Default: FunctionalComponent = () => (
    <l-row justifyContent="space-between" align="baseline">
      <div class="publication--info">
        <e-text>
          {this.heading}, {this.sub_Heading}
        </e-text>
        <l-row>
          <e-text>
            <e-link>Contents</e-link>
          </e-text>
          <l-spacer variant="horizontal" value={0.5}></l-spacer>
          <e-text>
            <e-link>Abstracts</e-link>
          </e-text>
          <l-spacer variant="horizontal" value={0.5}></l-spacer>
          <e-text>
            <e-link>Cover</e-link>
          </e-text>
        </l-row>
        <l-spacer value={0.5}></l-spacer>
        <e-text variant="footnote">{this.description}</e-text>
      </div>
      <div class="publication--pricing">
        <l-row justifyContent="space-between">
          <e-select options={this.documents} name="select_Document"></e-select>
        </l-row>
        <l-spacer value={1}></l-spacer>
        <l-row justifyContent="space-between">
          <e-text>{this.price_Active_Document}</e-text>
          <e-button action="goToCheckout" value={this.id_Active_Document} size="wide">
            Buy
          </e-button>
        </l-row>
      </div>
    </l-row>
  );

  render() {
    return <Host>{this.isSkel ? <this.ui_Skel></this.ui_Skel> : <this.ui_Default></this.ui_Default>}</Host>;
  }
}
