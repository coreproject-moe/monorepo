
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-user-minus', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-user-minus></coreproject-shape-user-minus>'
        );

        const element = await page.find('coreproject-shape-user-minus');
        expect(element).toHaveClass('hydrated');
    });
});
    