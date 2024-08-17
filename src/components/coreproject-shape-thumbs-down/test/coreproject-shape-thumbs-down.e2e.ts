import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-thumbs-down', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-thumbs-down></coreproject-shape-thumbs-down>');

        const element = await page.find('coreproject-shape-thumbs-down');
        expect(element).toHaveClass('hydrated');
    });
});
