import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-logo-discord', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-logo-discord></coreproject-logo-discord>');

        const element = await page.find('coreproject-logo-discord');
        expect(element).toHaveClass('hydrated');
    });
});
