import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-file-plus', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-file-plus></coreproject-shape-file-plus>');

        const element = await page.find('coreproject-shape-file-plus');
        expect(element).toHaveClass('hydrated');
    });
});
