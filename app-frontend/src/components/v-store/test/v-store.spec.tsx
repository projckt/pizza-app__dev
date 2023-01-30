import { newSpecPage } from '@stencil/core/testing';
import { VStore } from '../v-store';

describe('v-store', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VStore],
      html: `<v-store></v-store>`,
    });
    expect(page.root).toEqualHtml(`
      <v-store>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-store>
    `);
  });
});
