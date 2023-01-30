import { newE2EPage } from '@stencil/core/testing';

describe('v-payment-success', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-payment-success></v-payment-success>');

    const element = await page.find('v-payment-success');
    expect(element).toHaveClass('hydrated');
  });
});
