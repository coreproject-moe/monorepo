import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-x-circle', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-x-circle></coreproject-shape-x-circle>');

        const element = await page.find('coreproject-shape-x-circle');
        expect(element).toHaveClass('hydrated');
    });
});
