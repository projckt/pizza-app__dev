import { newE2EPage } from '@stencil/core/testing';

describe('e-radio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<e-radio></e-radio>');

    const element = await page.find('e-radio');
    expect(element).toHaveClass('hydrated');
  });
});
