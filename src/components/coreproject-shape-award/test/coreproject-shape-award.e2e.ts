
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-award', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-award></coreproject-shape-award>'
        );

        const element = await page.find('coreproject-shape-award');
        expect(element).toHaveClass('hydrated');
    });
});
    