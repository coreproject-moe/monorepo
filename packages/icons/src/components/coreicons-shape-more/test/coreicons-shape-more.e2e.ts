import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-more', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-more></coreicons-shape-more>');
        const element = await page.find('coreicons-shape-more');
        expect(element).toHaveClass('hydrated');
    });
});
