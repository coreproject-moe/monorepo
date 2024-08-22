import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-minimize', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-minimize></coreproject-shape-minimize>');
        const element = await page.find('coreproject-shape-minimize');
        expect(element).toHaveClass('hydrated');
    });
});
