import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-heart', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-heart></coreproject-shape-heart>');

        const element = await page.find('coreproject-shape-heart');
        expect(element).toHaveClass('hydrated');
    });
});
