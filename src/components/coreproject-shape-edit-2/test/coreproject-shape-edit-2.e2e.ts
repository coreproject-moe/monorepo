
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-edit-2', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-edit-2></coreproject-shape-edit-2>'
        );

        const element = await page.find('coreproject-shape-edit-2');
        expect(element).toHaveClass('hydrated');
    });
});
    