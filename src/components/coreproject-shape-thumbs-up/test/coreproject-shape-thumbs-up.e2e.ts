import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-thumbs-up', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-thumbs-up></coreproject-shape-thumbs-up>');

        const element = await page.find('coreproject-shape-thumbs-up');
        expect(element).toHaveClass('hydrated');
    });
});
