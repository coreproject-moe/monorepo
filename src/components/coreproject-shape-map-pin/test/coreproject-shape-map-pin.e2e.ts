import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-map-pin', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-map-pin></coreproject-shape-map-pin>');

        const element = await page.find('coreproject-shape-map-pin');
        expect(element).toHaveClass('hydrated');
    });
});
