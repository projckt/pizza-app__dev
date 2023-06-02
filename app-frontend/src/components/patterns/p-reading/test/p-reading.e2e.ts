import { newE2EPage } from '@stencil/core/testing';

describe('p-reading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-reading></p-reading>');

    const element = await page.find('p-reading');
    expect(element).toHaveClass('hydrated');
  });
});
