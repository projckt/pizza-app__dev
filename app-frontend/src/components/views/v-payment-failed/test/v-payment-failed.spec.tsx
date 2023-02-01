import { newSpecPage } from '@stencil/core/testing';
import { VPaymentFailed } from '../v-payment-failed';

describe('v-payment-failed', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VPaymentFailed],
      html: `<v-payment-failed></v-payment-failed>`,
    });
    expect(page.root).toEqualHtml(`
      <v-payment-failed>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-payment-failed>
    `);
  });
});
