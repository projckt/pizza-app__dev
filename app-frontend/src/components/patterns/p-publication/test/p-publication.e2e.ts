import { newE2EPage } from '@stencil/core/testing';

describe('p-publication', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-publication></p-publication>');

    const element = await page.find('p-publication');
    expect(element).toHaveClass('hydrated');
  });
});
