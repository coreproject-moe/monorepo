import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-frown', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-frown></coreicons-shape-frown>');
        const element = await page.find('coreicons-shape-frown');
        expect(element).toHaveClass('hydrated');
    });
});
