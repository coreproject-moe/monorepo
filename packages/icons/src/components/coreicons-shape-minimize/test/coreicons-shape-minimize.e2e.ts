import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-minimize', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-minimize></coreicons-shape-minimize>');
        const element = await page.find('coreicons-shape-minimize');
        expect(element).toHaveClass('hydrated');
    });
});
