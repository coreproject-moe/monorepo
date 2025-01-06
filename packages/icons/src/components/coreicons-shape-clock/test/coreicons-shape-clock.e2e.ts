import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-clock', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-clock></coreicons-shape-clock>');
        const element = await page.find('coreicons-shape-clock');
        expect(element).toHaveClass('hydrated');
    });
});
