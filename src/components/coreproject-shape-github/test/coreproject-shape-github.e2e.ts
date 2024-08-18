import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-github', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-github></coreproject-shape-github>');

        const element = await page.find('coreproject-shape-github');
        expect(element).toHaveClass('hydrated');
    });
});
