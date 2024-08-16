import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-more-vertical', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-more-vertical></coreproject-shape-more-vertical>');

        const element = await page.find('coreproject-shape-more-vertical');
        expect(element).toHaveClass('hydrated');
    });
});
