import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-tool', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-tool></coreicons-shape-tool>');
        const element = await page.find('coreicons-shape-tool');
        expect(element).toHaveClass('hydrated');
    });
});
