import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-cast', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-cast></coreicons-shape-cast>');
        const element = await page.find('coreicons-shape-cast');
        expect(element).toHaveClass('hydrated');
    });
});
