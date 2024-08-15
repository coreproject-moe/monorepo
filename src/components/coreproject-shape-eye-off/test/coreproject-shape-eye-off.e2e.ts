
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-eye-off', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-eye-off></coreproject-shape-eye-off>'
        );

        const element = await page.find('coreproject-shape-eye-off');
        expect(element).toHaveClass('hydrated');
    });
});
    