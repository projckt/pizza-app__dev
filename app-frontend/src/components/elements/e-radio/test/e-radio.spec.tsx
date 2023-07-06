import { newSpecPage } from '@stencil/core/testing';
import { ERadio } from '../e-radio';

describe('e-radio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ERadio],
      html: `<e-radio></e-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <e-radio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </e-radio>
    `);
  });
});
