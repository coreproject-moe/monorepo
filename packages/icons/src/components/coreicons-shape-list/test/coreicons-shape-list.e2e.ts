import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-list', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-list></coreicons-shape-list>');
        const element = await page.find('coreicons-shape-list');
        expect(element).toHaveClass('hydrated');
    });
});
