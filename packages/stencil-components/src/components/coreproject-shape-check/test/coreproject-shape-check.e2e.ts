import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-check', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-check></coreproject-shape-check>');
        const element = await page.find('coreproject-shape-check');
        expect(element).toHaveClass('hydrated');
    });
});
