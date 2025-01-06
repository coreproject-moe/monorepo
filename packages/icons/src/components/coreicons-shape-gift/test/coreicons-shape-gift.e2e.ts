import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-gift', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-gift></coreicons-shape-gift>');
        const element = await page.find('coreicons-shape-gift');
        expect(element).toHaveClass('hydrated');
    });
});
