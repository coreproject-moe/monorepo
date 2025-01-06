import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-save', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-save></coreicons-shape-save>');
        const element = await page.find('coreicons-shape-save');
        expect(element).toHaveClass('hydrated');
    });
});
