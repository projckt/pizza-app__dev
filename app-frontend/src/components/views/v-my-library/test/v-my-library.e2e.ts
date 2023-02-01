import { newE2EPage } from '@stencil/core/testing';

describe('v-my-library', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<v-my-library></v-my-library>');

    const element = await page.find('v-my-library');
    expect(element).toHaveClass('hydrated');
  });
});
