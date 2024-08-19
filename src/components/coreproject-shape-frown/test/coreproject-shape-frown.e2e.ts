
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-frown', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-frown></coreproject-shape-frown>'
        );

        const element = await page.find('coreproject-shape-frown');
        expect(element).toHaveClass('hydrated');
    });
});
    