import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-info', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-info></coreicons-shape-info>');
        const element = await page.find('coreicons-shape-info');
        expect(element).toHaveClass('hydrated');
    });
});
