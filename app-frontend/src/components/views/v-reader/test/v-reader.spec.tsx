import { newSpecPage } from '@stencil/core/testing';
import { VReader } from '../v-reader';

describe('v-reader', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VReader],
      html: `<v-reader></v-reader>`,
    });
    expect(page.root).toEqualHtml(`
      <v-reader>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-reader>
    `);
  });
});
