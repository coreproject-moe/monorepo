
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-code', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-code></coreproject-shape-code>');
        const element = await page.find('coreproject-shape-code');
        expect(element).toHaveClass('hydrated');
    });
});
