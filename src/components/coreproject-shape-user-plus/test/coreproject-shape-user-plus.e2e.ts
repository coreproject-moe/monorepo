
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-user-plus', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-user-plus></coreproject-shape-user-plus>'
        );

        const element = await page.find('coreproject-shape-user-plus');
        expect(element).toHaveClass('hydrated');
    });
});
    