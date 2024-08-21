
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-filter', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-filter></coreproject-shape-filter>');
        const element = await page.find('coreproject-shape-filter');
        expect(element).toHaveClass('hydrated');
    });
});
