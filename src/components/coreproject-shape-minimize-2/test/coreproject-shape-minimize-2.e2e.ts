
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-minimize-2', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-minimize-2></coreproject-shape-minimize-2>'
        );

        const element = await page.find('coreproject-shape-minimize-2');
        expect(element).toHaveClass('hydrated');
    });
});
    