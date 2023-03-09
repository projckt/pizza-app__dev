import { newSpecPage } from '@stencil/core/testing';
import { VRoot } from '../v-root';

describe('v-root', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VRoot],
      html: `<v-root></v-root>`,
    });
    expect(page.root).toEqualHtml(`
      <v-root>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-root>
    `);
  });
});
