
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-logo-figma', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-logo-figma></coreproject-logo-figma>'
        );

        const element = await page.find('coreproject-logo-figma');
        expect(element).toHaveClass('hydrated');
    });
});
    