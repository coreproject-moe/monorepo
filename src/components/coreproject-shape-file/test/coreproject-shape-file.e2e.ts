
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-file', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-file></coreproject-shape-file>'
        );

        const element = await page.find('coreproject-shape-file');
        expect(element).toHaveClass('hydrated');
    });
});
    