import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-more', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-more></coreproject-shape-more>');

        const element = await page.find('coreproject-shape-more');
        expect(element).toHaveClass('hydrated');
    });
});
