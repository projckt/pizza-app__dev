import { newE2EPage } from '@stencil/core/testing';

describe('v-root', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-root></v-root>');

    const element = await page.find('v-root');
    expect(element).toHaveClass('hydrated');
  });
});
