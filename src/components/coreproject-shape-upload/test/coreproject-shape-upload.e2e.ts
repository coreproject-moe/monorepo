
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-upload', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-upload></coreproject-shape-upload>'
        );

        const element = await page.find('coreproject-shape-upload');
        expect(element).toHaveClass('hydrated');
    });
});
    