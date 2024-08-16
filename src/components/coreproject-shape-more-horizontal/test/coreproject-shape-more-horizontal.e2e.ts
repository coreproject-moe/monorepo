import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-more-horizontal', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-more-horizontal></coreproject-shape-more-horizontal>');

        const element = await page.find('coreproject-shape-more-horizontal');
        expect(element).toHaveClass('hydrated');
    });
});
