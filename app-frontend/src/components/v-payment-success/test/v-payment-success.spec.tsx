import { newSpecPage } from '@stencil/core/testing';
import { VPaymentSuccess } from '../v-payment-success';

describe('v-payment-success', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VPaymentSuccess],
      html: `<v-payment-success></v-payment-success>`,
    });
    expect(page.root).toEqualHtml(`
      <v-payment-success>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-payment-success>
    `);
  });
});
