import { newSpecPage } from '@stencil/core/testing';
import { VMyLibrary } from '../v-my-library';

describe('v-my-library', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [VMyLibrary],
      html: `<v-my-library></v-my-library>`,
    });
    expect(page.root).toEqualHtml(`
      <v-my-library>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </v-my-library>
    `);
  });
});
