
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-rotate-ccw', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-rotate-ccw></coreproject-shape-rotate-ccw>'
        );

        const element = await page.find('coreproject-shape-rotate-ccw');
        expect(element).toHaveClass('hydrated');
    });
});
    