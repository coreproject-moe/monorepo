
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-shield-off', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-shield-off></coreproject-shape-shield-off>'
        );

        const element = await page.find('coreproject-shape-shield-off');
        expect(element).toHaveClass('hydrated');
    });
});
    