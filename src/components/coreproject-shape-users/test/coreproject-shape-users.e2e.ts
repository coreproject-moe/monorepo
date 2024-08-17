
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-users', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-users></coreproject-shape-users>'
        );

        const element = await page.find('coreproject-shape-users');
        expect(element).toHaveClass('hydrated');
    });
});
    