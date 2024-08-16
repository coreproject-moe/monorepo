import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-x', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-x></coreproject-shape-x>');

        const element = await page.find('coreproject-shape-x');
        expect(element).toHaveClass('hydrated');
    });
});
