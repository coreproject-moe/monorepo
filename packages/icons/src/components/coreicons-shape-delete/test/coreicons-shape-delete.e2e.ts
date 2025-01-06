import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-delete', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-delete></coreicons-shape-delete>');
        const element = await page.find('coreicons-shape-delete');
        expect(element).toHaveClass('hydrated');
    });
});
