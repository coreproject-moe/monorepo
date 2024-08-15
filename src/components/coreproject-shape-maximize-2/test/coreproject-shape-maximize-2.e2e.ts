
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-maximize-2', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-maximize-2></coreproject-shape-maximize-2>'
        );

        const element = await page.find('coreproject-shape-maximize-2');
        expect(element).toHaveClass('hydrated');
    });
});
    