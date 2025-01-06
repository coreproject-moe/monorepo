import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-hash', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-hash></coreicons-shape-hash>');
        const element = await page.find('coreicons-shape-hash');
        expect(element).toHaveClass('hydrated');
    });
});
