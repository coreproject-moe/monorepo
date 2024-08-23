
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-clipboard', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-clipboard></coreproject-shape-clipboard>');
        const element = await page.find('coreproject-shape-clipboard');
        expect(element).toHaveClass('hydrated');
    });
});
