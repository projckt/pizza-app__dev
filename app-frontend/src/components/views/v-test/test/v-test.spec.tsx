import { newSpecPage } from '@stencil/core/testing';
import { VTest } from '../v-test';

describe('v-test', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VTest],
      html: `<v-test></v-test>`,
    });
    expect(page.root).toEqualHtml(`
      <v-test>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-test>
    `);
  });
});
