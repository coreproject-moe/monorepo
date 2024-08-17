
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-user', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-user></coreproject-shape-user>'
        );

        const element = await page.find('coreproject-shape-user');
        expect(element).toHaveClass('hydrated');
    });
});
    