import { newSpecPage } from '@stencil/core/testing';
import { PPublication } from '../p-publication';

describe('p-publication', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PPublication],
      html: `<p-publication></p-publication>`,
    });
    expect(page.root).toEqualHtml(`
      <p-publication>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-publication>
    `);
  });
});
