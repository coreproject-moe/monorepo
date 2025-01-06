import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-external-link', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreicons-shape-external-link></coreicons-shape-external-link>'
        );
        const element = await page.find('coreicons-shape-external-link');
        expect(element).toHaveClass('hydrated');
    });
});
