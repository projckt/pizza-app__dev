import { Component, Event, EventEmitter, Prop, FunctionalComponent, Listen, State, Host, h } from '@stencil/core';
import { RouterHistory, injectHistory } from '@stencil/router';

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

  componentWillLoad() {}

  componentDidLoad() {
    this.fetch_ViewData();
  }

  async fetch_ViewData() {}

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
      <e-text variant="subHeading">Aitihya - Vol XIII, Issue 2</e-text>
      <l-spacer value={1}></l-spacer>
      <e-input type="radio" name="offering" value="fullJournal" label="Buy full journal, $50" checked={true}></e-input>
      <l-spacer value={0.5}></l-spacer>
      <e-input type="radio" name="offering" value="individualPaper" label="Buy individual paper, $9"></e-input>
      <l-spacer value={1.5}></l-spacer>
      <l-seperator></l-seperator>
      <l-spacer value={1.5}></l-spacer>
    </div>
  );

  ui_Summary: FunctionalComponent = () => (
    <table>
      <tr>
        <td>Item cost</td>
        <td>$50</td>
      </tr>
      <tr>
        <td>Processing fees</td>
        <td>$0</td>
      </tr>
      <tr>
        <td>
          <strong>Grand total</strong>
        </td>
        <td>
          <strong>$50</strong>
        </td>
      </tr>
    </table>
  );

  render() {
    return (
      <Host>
        <c-card>
          <e-text variant="subHeading">Checkout</e-text>
          <l-spacer value={0.75}></l-spacer>
          <l-seperator></l-seperator>
          <l-spacer value={1}></l-spacer>

          <this.ui_Skel_Lines></this.ui_Skel_Lines>

          <e-text variant="subHeading">Summary</e-text>
          <l-spacer value={0.5}></l-spacer>

          <this.ui_Skel_Lines></this.ui_Skel_Lines>

          <l-spacer value={0.5}></l-spacer>
          <e-text variant="footnote">Item cost includes GST</e-text>
          <l-spacer value={2}></l-spacer>
          <l-row justifyContent="space-between">
            <e-text variant="footnote">
              <e-link action="goBack" event={true}>
                &lt; Back
              </e-link>
            </e-text>
            <e-button>Confirm & pay</e-button>
          </l-row>
        </c-card>
      </Host>
    );
  }
}

injectHistory(VCheckout);
