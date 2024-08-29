
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-fast-forward', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-fast-forward></coreproject-shape-fast-forward>');
        const element = await page.find('coreproject-shape-fast-forward');
        expect(element).toHaveClass('hydrated');
    });
});
