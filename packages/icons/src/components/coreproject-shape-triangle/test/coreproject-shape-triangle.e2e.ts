
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-triangle', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-triangle></coreproject-shape-triangle>');
        const element = await page.find('coreproject-shape-triangle');
        expect(element).toHaveClass('hydrated');
    });
});
