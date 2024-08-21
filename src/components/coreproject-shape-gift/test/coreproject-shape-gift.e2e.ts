import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-gift', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-gift></coreproject-shape-gift>');

        const element = await page.find('coreproject-shape-gift');
        expect(element).toHaveClass('hydrated');
    });
});
