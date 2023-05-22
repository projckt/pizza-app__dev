import { Component, Event, EventEmitter, Prop, FunctionalComponent, Listen, State, Host, h } from '@stencil/core';
import { RouterHistory, injectHistory } from '@stencil/router';
import {
  helper_ApiCall_Get_Document,
  helper_Generate_DocumentDetails_Payload,
  helper_Generate_Create_Stripe_CheckoutSession_Payload,
  helper_ApiCall_Create_Stripe_CheckoutSession,
} from './helpers';
import { state } from '../../../global/script';

import { loadStripe } from '@stripe/stripe-js';

@Component({
  tag: 'v-checkout',
  styleUrl: 'v-checkout.css',
  shadow: true,
})
export class VCheckout {
  @Prop() history: RouterHistory;
  @State() isFetched_ViewData: boolean = false;

  @Event({
    eventName: 'event_RouteTo',
    bubbles: true,
  })
  event_RouteTo: EventEmitter;

  @Listen('event_LinkClick') handle_LinkClick(e) {
    if (e.detail.action === 'goBack') {
      this.event_RouteTo.emit({
        type: 'goBack',
      });
    }
  }

  @Listen('buttonClick') handle_ButtonClick(e) {
    if (e.detail.action === 'action_Create_CheckoutSession') {
      this.create_Checkout_Session();
    }
  }

  private data_Document: any;
  private name_Publication: string = '';
  private name_Document: string = '';
  private price_Document: string = '';
  private stripe_Key_Public: string = '';
  private stripe: any;

  componentWillLoad() {
    if (!this.history.location.state) {
      this.event_RouteTo.emit({
        type: 'push',
        route: '/store',
        data: {},
      });
    }
  }

  componentDidLoad() {
    this.fetch_ViewData();
  }

  async fetch_ViewData() {
    let payload_Get_Document_Inputs: any = helper_Generate_DocumentDetails_Payload(this.history.location.state);
    let { success, message, payload } = await helper_ApiCall_Get_Document(payload_Get_Document_Inputs);
    if (!success) {
      return alert(`❌ ${message}`);
    }

    this.data_Document = payload;
    this.init_ViewData();
    this.init_Stripe();

    this.isFetched_ViewData = true;
  }

  init_ViewData() {
    this.name_Publication = this.data_Document.name_Publication;
    this.name_Document = this.data_Document.name_Document;
    this.stripe_Key_Public = this.data_Document.stripe_Key_Public;
  }

  async init_Stripe() {
    this.stripe = await loadStripe(this.stripe_Key_Public!);
  }

  async create_Checkout_Session() {
    let payload_Create_Stripe_CheckoutSession: any = helper_Generate_Create_Stripe_CheckoutSession_Payload(this.history.location.state);
    let { success, message, payload } = await helper_ApiCall_Create_Stripe_CheckoutSession(payload_Create_Stripe_CheckoutSession);
    if (!success) {
      return alert(`❌ ${message}`);
    }

    const { error } = await this.stripe!.redirectToCheckout({
      sessionId: payload,
    });
    console.warn(error.message);
  }

  ui_Skel_Lines: FunctionalComponent = () => (
    <div>
      <l-spacer value={1}></l-spacer>
      <div class="skel__line"></div>
      <l-spacer value={1}></l-spacer>
      <div class="skel__line"></div>
      <l-spacer value={1}></l-spacer>
      <div class="skel__line"></div>
      <l-spacer value={1}></l-spacer>
    </div>
  );

  ui_Details: FunctionalComponent = () => (
    <div>
      <e-text variant="subHeading">{this.name_Publication}</e-text>
      <e-text>{this.name_Document}</e-text>
    </div>
  );

  ui_Summary: FunctionalComponent = () => (
    <table>
      <tr>
        <td>Item cost</td>
        <td>{this.price_Document}</td>
      </tr>
      <tr>
        <td>Processing fees</td>
        <td>{this.price_Document[0]}0</td>
      </tr>
      <tr>
        <td>
          <strong>Grand total</strong>
        </td>
        <td>
          <strong>{this.price_Document}</strong>
        </td>
      </tr>
    </table>
  );

  render() {
    return (
      <Host>
        <c-card>
          {this.isFetched_ViewData ? (
            <div>
              <this.ui_Details></this.ui_Details>
              <l-spacer value={0.25}></l-spacer>
              <this.ui_Summary></this.ui_Summary>
              <l-spacer value={0.5}></l-spacer>
              <e-text variant="footnote">Item cost includes GST</e-text>
            </div>
          ) : (
            <div>
              <this.ui_Skel_Lines></this.ui_Skel_Lines>
              <l-spacer value={2}></l-spacer>
              <this.ui_Skel_Lines></this.ui_Skel_Lines>
            </div>
          )}

          <l-spacer value={2}></l-spacer>
          <l-row justifyContent="space-between">
            <e-text variant="footnote">
              <e-link action="goBack" event={true}>
                &lt; Back
              </e-link>
            </e-text>
            <e-button action="action_Create_CheckoutSession">Confirm & pay</e-button>
          </l-row>
        </c-card>
      </Host>
    );
  }
}

injectHistory(VCheckout);
