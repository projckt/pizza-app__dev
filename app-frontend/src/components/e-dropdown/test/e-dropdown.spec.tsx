import { newSpecPage } from '@stencil/core/testing';
import { EDropdown } from '../e-dropdown';

describe('e-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EDropdown],
      html: `<e-dropdown></e-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <e-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </e-dropdown>
    `);
  });
});
