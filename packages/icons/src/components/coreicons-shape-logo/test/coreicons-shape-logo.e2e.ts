import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-logo', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-logo></coreicons-shape-logo>');
        const element = await page.find('coreicons-shape-logo');
        expect(element).toHaveClass('hydrated');
    });
});
