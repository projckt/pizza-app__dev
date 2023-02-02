import { newE2EPage } from '@stencil/core/testing';

describe('v-reader', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-reader></v-reader>');

    const element = await page.find('v-reader');
    expect(element).toHaveClass('hydrated');
  });
});
