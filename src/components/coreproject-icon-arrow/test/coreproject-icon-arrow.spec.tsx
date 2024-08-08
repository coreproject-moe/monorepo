import { newSpecPage } from '@stencil/core/testing';
import { CoreprojectIconArrow } from '../coreproject-icon-arrow';

describe('coreproject-icon-arrow', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreprojectIconArrow],
      html: `<coreproject-icon-arrow></coreproject-icon-arrow>`,
    });
    expect(page.root).toEqualHtml(`
      <coreproject-icon-arrow>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </coreproject-icon-arrow>
    `);
  });
});
