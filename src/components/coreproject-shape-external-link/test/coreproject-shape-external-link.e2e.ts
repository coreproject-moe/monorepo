import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-external-link', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-external-link></coreproject-shape-external-link>');

        const element = await page.find('coreproject-shape-external-link');
        expect(element).toHaveClass('hydrated');
    });
});
