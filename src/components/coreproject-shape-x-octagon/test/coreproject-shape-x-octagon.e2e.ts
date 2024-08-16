import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-x-octagon', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-x-octagon></coreproject-shape-x-octagon>');

        const element = await page.find('coreproject-shape-x-octagon');
        expect(element).toHaveClass('hydrated');
    });
});
