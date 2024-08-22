import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-tool', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-tool></coreproject-shape-tool>');
        const element = await page.find('coreproject-shape-tool');
        expect(element).toHaveClass('hydrated');
    });
});
