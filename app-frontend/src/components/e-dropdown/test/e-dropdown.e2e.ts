import { newE2EPage } from '@stencil/core/testing';

describe('e-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<e-dropdown></e-dropdown>');

    const element = await page.find('e-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
