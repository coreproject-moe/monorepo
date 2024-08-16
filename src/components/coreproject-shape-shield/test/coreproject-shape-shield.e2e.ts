import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-shield', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-shield></coreproject-shape-shield>');

        const element = await page.find('coreproject-shape-shield');
        expect(element).toHaveClass('hydrated');
    });
});
