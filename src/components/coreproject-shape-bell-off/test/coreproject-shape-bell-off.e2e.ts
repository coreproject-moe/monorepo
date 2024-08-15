
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-bell-off', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-bell-off></coreproject-shape-bell-off>'
        );

        const element = await page.find('coreproject-shape-bell-off');
        expect(element).toHaveClass('hydrated');
    });
});
    