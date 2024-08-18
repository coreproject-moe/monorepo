import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-star', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-star></coreproject-shape-star>');

        const element = await page.find('coreproject-shape-star');
        expect(element).toHaveClass('hydrated');
    });
});
