
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-file-text', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-file-text></coreproject-shape-file-text>'
        );

        const element = await page.find('coreproject-shape-file-text');
        expect(element).toHaveClass('hydrated');
    });
});
    