
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-folder', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-folder></coreproject-shape-folder>'
        );

        const element = await page.find('coreproject-shape-folder');
        expect(element).toHaveClass('hydrated');
    });
});
    