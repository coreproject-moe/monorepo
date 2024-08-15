
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-help-circle', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-help-circle></coreproject-shape-help-circle>'
        );

        const element = await page.find('coreproject-shape-help-circle');
        expect(element).toHaveClass('hydrated');
    });
});
    