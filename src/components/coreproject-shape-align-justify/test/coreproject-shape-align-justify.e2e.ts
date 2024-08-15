
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-align-justify', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-align-justify></coreproject-shape-align-justify>'
        );

        const element = await page.find('coreproject-shape-align-justify');
        expect(element).toHaveClass('hydrated');
    });
});
    