import { newE2EPage } from '@stencil/core/testing';

describe('c-sidebar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<c-sidebar></c-sidebar>');

    const element = await page.find('c-sidebar');
    expect(element).toHaveClass('hydrated');
  });
});
