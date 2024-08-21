
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-save', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-save></coreproject-shape-save>'
        );

        const element = await page.find('coreproject-shape-save');
        expect(element).toHaveClass('hydrated');
    });
});
    