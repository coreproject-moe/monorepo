
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-user-check', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-user-check></coreproject-shape-user-check>'
        );

        const element = await page.find('coreproject-shape-user-check');
        expect(element).toHaveClass('hydrated');
    });
});
    