
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-smile', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-smile></coreproject-shape-smile>'
        );

        const element = await page.find('coreproject-shape-smile');
        expect(element).toHaveClass('hydrated');
    });
});
    