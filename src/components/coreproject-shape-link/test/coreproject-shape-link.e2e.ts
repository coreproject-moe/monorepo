import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-link', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-link></coreproject-shape-link>');

        const element = await page.find('coreproject-shape-link');
        expect(element).toHaveClass('hydrated');
    });
});
