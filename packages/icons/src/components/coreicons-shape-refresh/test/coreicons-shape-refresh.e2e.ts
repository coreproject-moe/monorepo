import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-refresh', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-refresh></coreicons-shape-refresh>');
        const element = await page.find('coreicons-shape-refresh');
        expect(element).toHaveClass('hydrated');
    });
});
