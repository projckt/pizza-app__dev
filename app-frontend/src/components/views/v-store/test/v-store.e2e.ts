import { newE2EPage } from '@stencil/core/testing';

describe('v-store', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-store></v-store>');

    const element = await page.find('v-store');
    expect(element).toHaveClass('hydrated');
  });
});
