
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-circle', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-circle></coreproject-shape-circle>');
        const element = await page.find('coreproject-shape-circle');
        expect(element).toHaveClass('hydrated');
    });
});
