import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-italic', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-italic></coreicons-shape-italic>');
        const element = await page.find('coreicons-shape-italic');
        expect(element).toHaveClass('hydrated');
    });
});
