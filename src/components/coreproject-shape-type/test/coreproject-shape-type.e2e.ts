import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-type', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-type></coreproject-shape-type>');

        const element = await page.find('coreproject-shape-type');
        expect(element).toHaveClass('hydrated');
    });
});
