import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-triangle', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-triangle></coreicons-shape-triangle>');
        const element = await page.find('coreicons-shape-triangle');
        expect(element).toHaveClass('hydrated');
    });
});
