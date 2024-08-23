import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-mouse-pointer', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-mouse-pointer></coreproject-shape-mouse-pointer>');
        const element = await page.find('coreproject-shape-mouse-pointer');
        expect(element).toHaveClass('hydrated');
    });
});
