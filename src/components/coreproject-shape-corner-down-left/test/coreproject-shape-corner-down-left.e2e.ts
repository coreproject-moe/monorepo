import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-corner-down-left', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-corner-down-left></coreproject-shape-corner-down-left>');

        const element = await page.find('coreproject-shape-corner-down-left');
        expect(element).toHaveClass('hydrated');
    });
});
