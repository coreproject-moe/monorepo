import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-folder-plus', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-folder-plus></coreproject-shape-folder-plus>');

        const element = await page.find('coreproject-shape-folder-plus');
        expect(element).toHaveClass('hydrated');
    });
});
