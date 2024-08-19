import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-smartphone', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-smartphone></coreproject-shape-smartphone>');

        const element = await page.find('coreproject-shape-smartphone');
        expect(element).toHaveClass('hydrated');
    });
});
