
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-minus', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-minus></coreproject-shape-minus>');
        const element = await page.find('coreproject-shape-minus');
        expect(element).toHaveClass('hydrated');
    });
});
