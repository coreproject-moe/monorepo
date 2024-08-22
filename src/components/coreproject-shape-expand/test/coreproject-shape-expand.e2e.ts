import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-expand', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-expand></coreproject-shape-expand>');
        const element = await page.find('coreproject-shape-expand');
        expect(element).toHaveClass('hydrated');
    });
});
