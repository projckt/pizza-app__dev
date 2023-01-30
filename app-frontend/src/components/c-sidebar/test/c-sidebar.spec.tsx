import { newSpecPage } from '@stencil/core/testing';
import { CSidebar } from '../c-sidebar';

describe('c-sidebar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CSidebar],
      html: `<c-sidebar></c-sidebar>`,
    });
    expect(page.root).toEqualHtml(`
      <c-sidebar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </c-sidebar>
    `);
  });
});
