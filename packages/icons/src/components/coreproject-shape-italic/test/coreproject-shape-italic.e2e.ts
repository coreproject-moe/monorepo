
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-italic', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-italic></coreproject-shape-italic>');
        const element = await page.find('coreproject-shape-italic');
        expect(element).toHaveClass('hydrated');
    });
});
