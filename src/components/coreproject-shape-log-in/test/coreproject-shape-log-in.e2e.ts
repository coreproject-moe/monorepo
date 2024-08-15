
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-log-in', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-log-in></coreproject-shape-log-in>'
        );

        const element = await page.find('coreproject-shape-log-in');
        expect(element).toHaveClass('hydrated');
    });
});
    