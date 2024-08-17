import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-volume-x', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-volume-x></coreproject-shape-volume-x>');

        const element = await page.find('coreproject-shape-volume-x');
        expect(element).toHaveClass('hydrated');
    });
});
