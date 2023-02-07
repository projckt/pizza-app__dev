import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'v-checkout',
  styleUrl: 'v-checkout.css',
  shadow: true,
})
export class VCheckout {
  render() {
    return (
      <Host>
        <c-card>
          <e-text variant="display">Checkout</e-text>
          <l-spacer value={0.75}></l-spacer>
          <l-seperator></l-seperator>
          <l-spacer value={1}></l-spacer>

          <e-text variant="subHeading">Aitihya - Vol XIII, Issue 2</e-text>
          <l-spacer value={1}></l-spacer>

          <e-input type="radio" name="offering" value="fullJournal" label="Buy full journal, $50" checked={true}></e-input>
          <l-spacer value={0.5}></l-spacer>
          <e-input type="radio" name="offering" value="individualPaper" label="Buy individual paper, $9"></e-input>
          <l-spacer value={1.5}></l-spacer>
          <l-seperator></l-seperator>
          <l-spacer value={1.5}></l-spacer>
          <e-text variant="subHeading">Summary</e-text>

          <l-spacer value={0.5}></l-spacer>
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
          <l-spacer value={0.5}></l-spacer>
          <e-text variant="footnote">Item cost includes GST</e-text>
          <l-spacer value={2}></l-spacer>
          <e-button>Buy</e-button>
        </c-card>
      </Host>
    );
  }
}
