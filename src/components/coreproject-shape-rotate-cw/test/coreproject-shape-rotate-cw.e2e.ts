import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-rotate-cw', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-rotate-cw></coreproject-shape-rotate-cw>');

        const element = await page.find('coreproject-shape-rotate-cw');
        expect(element).toHaveClass('hydrated');
    });
});
