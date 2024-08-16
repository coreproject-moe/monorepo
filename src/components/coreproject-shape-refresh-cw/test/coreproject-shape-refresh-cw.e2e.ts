import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-refresh-cw', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-refresh-cw></coreproject-shape-refresh-cw>');

        const element = await page.find('coreproject-shape-refresh-cw');
        expect(element).toHaveClass('hydrated');
    });
});
