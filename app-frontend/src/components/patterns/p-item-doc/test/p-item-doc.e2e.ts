import { newE2EPage } from '@stencil/core/testing';

describe('p-item-doc', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<p-item-doc></p-item-doc>');

    const element = await page.find('p-item-doc');
    expect(element).toHaveClass('hydrated');
  });
});
