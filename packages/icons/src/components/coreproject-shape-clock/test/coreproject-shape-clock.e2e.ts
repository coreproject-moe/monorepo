
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-clock', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-clock></coreproject-shape-clock>');
        const element = await page.find('coreproject-shape-clock');
        expect(element).toHaveClass('hydrated');
    });
});
