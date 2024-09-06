
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-maximize', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-maximize></coreproject-shape-maximize>');
        const element = await page.find('coreproject-shape-maximize');
        expect(element).toHaveClass('hydrated');
    });
});
