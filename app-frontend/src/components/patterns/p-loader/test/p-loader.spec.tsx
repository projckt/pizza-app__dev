import { newSpecPage } from '@stencil/core/testing';
import { PLoader } from '../p-loader';

describe('p-loader', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PLoader],
      html: `<p-loader></p-loader>`,
    });
    expect(page.root).toEqualHtml(`
      <p-loader>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </p-loader>
    `);
  });
});
