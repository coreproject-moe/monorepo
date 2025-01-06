import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-code', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-code></coreicons-shape-code>');
        const element = await page.find('coreicons-shape-code');
        expect(element).toHaveClass('hydrated');
    });
});
