import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-home', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-home></coreproject-shape-home>');
        const element = await page.find('coreproject-shape-home');
        expect(element).toHaveClass('hydrated');
    });
});
