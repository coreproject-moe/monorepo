import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-home', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-home></coreicons-shape-home>');
        const element = await page.find('coreicons-shape-home');
        expect(element).toHaveClass('hydrated');
    });
});
