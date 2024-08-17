import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-refresh-ccw', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-refresh-ccw></coreproject-shape-refresh-ccw>');

        const element = await page.find('coreproject-shape-refresh-ccw');
        expect(element).toHaveClass('hydrated');
    });
});
