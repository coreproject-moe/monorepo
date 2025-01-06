import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-logo-discord', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-logo-discord></coreicons-logo-discord>');
        const element = await page.find('coreicons-logo-discord');
        expect(element).toHaveClass('hydrated');
    });
});
