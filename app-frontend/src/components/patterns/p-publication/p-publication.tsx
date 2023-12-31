import { Component, Host, State, FunctionalComponent, Prop, Listen, h } from '@stencil/core';
import { helper_Generate_Payload_To_Fetch_DocumentPrice, helper_ApiCall_Fetch_DocumentPrice } from './helpers';
import { interface_Fetch_DocumentPrice_Payload } from './interfaces';

@Component({
  tag: 'p-publication',
  styleUrl: 'p-publication.css',
  shadow: true,
})
export class PPublication {
  @Listen('event_selectInput') handle_SelectInput(e) {
    if (e.detail.name === 'select_Document') {
      if (this.isLoaded) {
        this.fetch_DocumentPrice(e.detail.value);
      }
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
  @State() isDisabled_Buy_Button: boolean = false;

  private isLoaded: boolean = false;

  componentWillLoad() {
    if (this.documents) {
      this.generate_Price_Active_Document();
    }
  }

  componentDidLoad() {
    this.isLoaded = true;
  }

  async fetch_DocumentPrice(id_Document: string) {
    this.isDisabled_Buy_Button = true;
    let payload_To_Fetch_DocumentPrice: interface_Fetch_DocumentPrice_Payload = helper_Generate_Payload_To_Fetch_DocumentPrice(id_Document);
    let { success, message, payload } = await helper_ApiCall_Fetch_DocumentPrice(payload_To_Fetch_DocumentPrice);
    if (!success) {
      return alert(message);
    }
    this.id_Active_Document = payload.id;
    this.price_Active_Document = `${payload.currency}${payload.price}`;
    this.isDisabled_Buy_Button = false;
  }

  generate_Price_Active_Document() {
    let parsed_Documents: any = JSON.parse(this.documents);
    this.price_Active_Document = `${parsed_Documents[0].currency}${parsed_Documents[0].price}`;
    this.id_Active_Document = parsed_Documents[0].id;
  }

  ui_Skel: FunctionalComponent = () => (
    <div>
      <l-row justifyContent="space-between">
        <div>
          <div class="skel-item skel-item-300"></div>
          <l-spacer value={1}></l-spacer>
          <div class="skel-item skel-item-300"></div>
          <l-spacer value={1.5}></l-spacer>
          <div class="skel-item skel-item-200"></div>
        </div>
        <div>
          <div class="skel-item skel-item-150"></div>
          <l-spacer value={1}></l-spacer>
          <div class="skel-item skel-item-200"></div>
        </div>
      </l-row>
    </div>
  );

  ui_Default: FunctionalComponent = () => (
    <l-row justifyContent="space-between" align="baseline">
      <div class="publication--info">
        <e-text>
          {this.heading}, {this.sub_Heading}
        </e-text>
        <l-row>
          <e-text>
            <e-link href={this.url_Toc} target="_blank">
              Contents
            </e-link>
          </e-text>
          <l-spacer variant="horizontal" value={0.5}></l-spacer>
          <e-text>
            <e-link href={this.url_Sample} target="_blank">
              Abstracts
            </e-link>
          </e-text>
          <l-spacer variant="horizontal" value={0.5}></l-spacer>
          <e-text>
            <e-link href={this.url_Cover} target="_blank">
              Cover
            </e-link>
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
          <e-button action="goToCheckout" value={this.id_Active_Document} size="wide" disabled={this.isDisabled_Buy_Button}>
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
