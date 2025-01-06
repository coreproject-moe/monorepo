import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-box', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-box></coreicons-shape-box>');
        const element = await page.find('coreicons-shape-box');
        expect(element).toHaveClass('hydrated');
    });
});
