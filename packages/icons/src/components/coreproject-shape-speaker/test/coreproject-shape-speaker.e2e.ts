
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-speaker', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-speaker></coreproject-shape-speaker>');
        const element = await page.find('coreproject-shape-speaker');
        expect(element).toHaveClass('hydrated');
    });
});
