import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-arrow-down', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-arrow-down></coreproject-shape-arrow-down>');

        const element = await page.find('coreproject-shape-arrow-down');
        expect(element).toHaveClass('hydrated');
    });
});
