import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-mail', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-mail></coreicons-shape-mail>');
        const element = await page.find('coreicons-shape-mail');
        expect(element).toHaveClass('hydrated');
    });
});
