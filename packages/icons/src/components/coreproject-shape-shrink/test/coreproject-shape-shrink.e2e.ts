import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-shrink', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-shrink></coreproject-shape-shrink>');
        const element = await page.find('coreproject-shape-shrink');
        expect(element).toHaveClass('hydrated');
    });
});
