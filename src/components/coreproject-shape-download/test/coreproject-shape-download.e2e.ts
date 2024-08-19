
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-download', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-download></coreproject-shape-download>'
        );

        const element = await page.find('coreproject-shape-download');
        expect(element).toHaveClass('hydrated');
    });
});
    