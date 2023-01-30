import { newE2EPage } from '@stencil/core/testing';

describe('v-payment-failed', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-payment-failed></v-payment-failed>');

    const element = await page.find('v-payment-failed');
    expect(element).toHaveClass('hydrated');
  });
});
