
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-eye', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-eye></coreproject-shape-eye>'
        );

        const element = await page.find('coreproject-shape-eye');
        expect(element).toHaveClass('hydrated');
    });
});
    