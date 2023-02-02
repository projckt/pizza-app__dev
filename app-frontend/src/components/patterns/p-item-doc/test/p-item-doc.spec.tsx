import { newSpecPage } from '@stencil/core/testing';
import { PItemDoc } from '../p-item-doc';

describe('p-item-doc', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PItemDoc],
      html: `<p-item-doc></p-item-doc>`,
    });
    expect(page.root).toEqualHtml(`
      <p-item-doc>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-item-doc>
    `);
  });
});
