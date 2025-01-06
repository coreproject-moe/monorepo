import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-alert-triangle', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreicons-shape-alert-triangle></coreicons-shape-alert-triangle>'
        );
        const element = await page.find('coreicons-shape-alert-triangle');
        expect(element).toHaveClass('hydrated');
    });
});
