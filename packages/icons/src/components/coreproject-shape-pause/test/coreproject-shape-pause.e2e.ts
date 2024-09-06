
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-pause', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-pause></coreproject-shape-pause>');
        const element = await page.find('coreproject-shape-pause');
        expect(element).toHaveClass('hydrated');
    });
});
