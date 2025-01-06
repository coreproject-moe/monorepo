import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-meh', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-meh></coreicons-shape-meh>');
        const element = await page.find('coreicons-shape-meh');
        expect(element).toHaveClass('hydrated');
    });
});
