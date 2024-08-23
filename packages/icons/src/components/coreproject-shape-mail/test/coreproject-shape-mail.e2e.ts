import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-mail', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-mail></coreproject-shape-mail>');
        const element = await page.find('coreproject-shape-mail');
        expect(element).toHaveClass('hydrated');
    });
});
