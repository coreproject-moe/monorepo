import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-maximize', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-maximize></coreicons-shape-maximize>');
        const element = await page.find('coreicons-shape-maximize');
        expect(element).toHaveClass('hydrated');
    });
});
