import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-key', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-key></coreicons-shape-key>');
        const element = await page.find('coreicons-shape-key');
        expect(element).toHaveClass('hydrated');
    });
});
