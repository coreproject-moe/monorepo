
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-edit-3', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-edit-3></coreproject-shape-edit-3>'
        );

        const element = await page.find('coreproject-shape-edit-3');
        expect(element).toHaveClass('hydrated');
    });
});
    