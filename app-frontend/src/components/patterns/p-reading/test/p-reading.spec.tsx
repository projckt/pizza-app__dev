import { newSpecPage } from '@stencil/core/testing';
import { PReading } from '../p-reading';

describe('p-reading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PReading],
      html: `<p-reading></p-reading>`,
    });
    expect(page.root).toEqualHtml(`
      <p-reading>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-reading>
    `);
  });
});
