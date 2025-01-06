import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-moon', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-moon></coreicons-shape-moon>');
        const element = await page.find('coreicons-shape-moon');
        expect(element).toHaveClass('hydrated');
    });
});
