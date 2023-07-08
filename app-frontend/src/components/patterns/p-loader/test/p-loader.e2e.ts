import { newE2EPage } from '@stencil/core/testing';

describe('p-loader', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-loader></p-loader>');

    const element = await page.find('p-loader');
    expect(element).toHaveClass('hydrated');
  });
});
