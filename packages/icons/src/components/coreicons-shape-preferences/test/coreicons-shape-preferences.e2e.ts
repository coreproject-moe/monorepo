import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-preferences', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreicons-shape-preferences></coreicons-shape-preferences>'
        );
        const element = await page.find('coreicons-shape-preferences');
        expect(element).toHaveClass('hydrated');
    });
});
