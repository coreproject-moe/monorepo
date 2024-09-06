
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-twitter', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-twitter></coreproject-shape-twitter>');
        const element = await page.find('coreproject-shape-twitter');
        expect(element).toHaveClass('hydrated');
    });
});
