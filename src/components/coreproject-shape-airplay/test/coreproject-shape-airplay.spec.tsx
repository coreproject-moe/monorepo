import { newSpecPage } from '@stencil/core/testing';
import { CoreprojectShapeAirplay } from '../coreproject-shape-airplay';

describe('coreproject-shape-airplay', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CoreprojectShapeAirplay],
      html: `<coreproject-shape-airplay></coreproject-shape-airplay>`,
    });
    expect(page.root).toEqualHtml(`
      <coreproject-shape-airplay>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </coreproject-shape-airplay>
    `);
  });
});
