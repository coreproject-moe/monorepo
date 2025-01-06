import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-search', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-search></coreicons-shape-search>');
        const element = await page.find('coreicons-shape-search');
        expect(element).toHaveClass('hydrated');
    });
});
