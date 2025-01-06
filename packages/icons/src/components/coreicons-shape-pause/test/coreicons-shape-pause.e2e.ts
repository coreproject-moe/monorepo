import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-pause', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-pause></coreicons-shape-pause>');
        const element = await page.find('coreicons-shape-pause');
        expect(element).toHaveClass('hydrated');
    });
});
