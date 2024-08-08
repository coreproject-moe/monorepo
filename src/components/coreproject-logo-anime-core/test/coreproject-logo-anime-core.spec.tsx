import { newSpecPage } from '@stencil/core/testing';
import { CoreprojectIcon } from '../coreproject-logo-anime-core';

describe('coreproject-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreprojectIcon],
      html: `<coreproject-icon></coreproject-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <coreproject-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </coreproject-icon>
    `);
  });
});
