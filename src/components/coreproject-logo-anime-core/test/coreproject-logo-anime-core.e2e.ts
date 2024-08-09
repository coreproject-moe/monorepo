import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-logo-anime-core', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-logo-anime-core></coreproject-logo-anime-core>');

        const element = await page.find('coreproject-logo-anime-core');
        expect(element).toHaveClass('hydrated');
    });
});
