import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-at-sign', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-at-sign></coreicons-shape-at-sign>');
        const element = await page.find('coreicons-shape-at-sign');
        expect(element).toHaveClass('hydrated');
    });
});
