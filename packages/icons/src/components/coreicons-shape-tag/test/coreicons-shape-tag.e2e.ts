import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-tag', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-tag></coreicons-shape-tag>');
        const element = await page.find('coreicons-shape-tag');
        expect(element).toHaveClass('hydrated');
    });
});
