import { newE2EPage } from '@stencil/core/testing';

describe('v-test', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-test></v-test>');

    const element = await page.find('v-test');
    expect(element).toHaveClass('hydrated');
  });
});
