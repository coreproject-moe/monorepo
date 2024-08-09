import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-logo-reddit', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-logo-reddit></coreproject-logo-reddit>');

        const element = await page.find('coreproject-logo-reddit');
        expect(element).toHaveClass('hydrated');
    });
});
