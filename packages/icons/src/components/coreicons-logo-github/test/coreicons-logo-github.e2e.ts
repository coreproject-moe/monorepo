import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-logo-github', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-logo-github></coreicons-logo-github>');
        const element = await page.find('coreicons-logo-github');
        expect(element).toHaveClass('hydrated');
    });
});
