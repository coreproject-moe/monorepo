
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-compass', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-compass></coreproject-shape-compass>'
        );

        const element = await page.find('coreproject-shape-compass');
        expect(element).toHaveClass('hydrated');
    });
});
    