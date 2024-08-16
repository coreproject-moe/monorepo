import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-chevron-up', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-chevron-up></coreproject-shape-chevron-up>');

        const element = await page.find('coreproject-shape-chevron-up');
        expect(element).toHaveClass('hydrated');
    });
});
