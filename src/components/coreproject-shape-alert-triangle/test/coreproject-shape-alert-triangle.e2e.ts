
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-alert-triangle', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-alert-triangle></coreproject-shape-alert-triangle>'
        );

        const element = await page.find('coreproject-shape-alert-triangle');
        expect(element).toHaveClass('hydrated');
    });
});
    