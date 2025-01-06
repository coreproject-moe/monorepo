import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-lock', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-lock></coreicons-shape-lock>');
        const element = await page.find('coreicons-shape-lock');
        expect(element).toHaveClass('hydrated');
    });
});
