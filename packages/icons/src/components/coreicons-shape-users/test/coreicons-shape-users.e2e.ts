import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-users', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-users></coreicons-shape-users>');
        const element = await page.find('coreicons-shape-users');
        expect(element).toHaveClass('hydrated');
    });
});
