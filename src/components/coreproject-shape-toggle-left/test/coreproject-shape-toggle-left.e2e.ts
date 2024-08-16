import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-toggle-left', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-toggle-left></coreproject-shape-toggle-left>');

        const element = await page.find('coreproject-shape-toggle-left');
        expect(element).toHaveClass('hydrated');
    });
});
