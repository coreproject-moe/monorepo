import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-star', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-star></coreicons-shape-star>');
        const element = await page.find('coreicons-shape-star');
        expect(element).toHaveClass('hydrated');
    });
});
