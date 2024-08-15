
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-align-center', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-align-center></coreproject-shape-align-center>'
        );

        const element = await page.find('coreproject-shape-align-center');
        expect(element).toHaveClass('hydrated');
    });
});
    