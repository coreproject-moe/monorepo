import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-flag', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-flag></coreicons-shape-flag>');
        const element = await page.find('coreicons-shape-flag');
        expect(element).toHaveClass('hydrated');
    });
});
