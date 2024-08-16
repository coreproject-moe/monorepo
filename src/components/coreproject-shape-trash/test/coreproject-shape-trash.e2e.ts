import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-trash', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-trash></coreproject-shape-trash>');

        const element = await page.find('coreproject-shape-trash');
        expect(element).toHaveClass('hydrated');
    });
});
