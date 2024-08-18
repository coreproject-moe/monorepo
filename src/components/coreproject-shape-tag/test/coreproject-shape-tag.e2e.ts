import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-tag', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-tag></coreproject-shape-tag>');

        const element = await page.find('coreproject-shape-tag');
        expect(element).toHaveClass('hydrated');
    });
});
