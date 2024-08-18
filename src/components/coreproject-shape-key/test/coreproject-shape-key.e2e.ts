import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-key', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-key></coreproject-shape-key>');

        const element = await page.find('coreproject-shape-key');
        expect(element).toHaveClass('hydrated');
    });
});
