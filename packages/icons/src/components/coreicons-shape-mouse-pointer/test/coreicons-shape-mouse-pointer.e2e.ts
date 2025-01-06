import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-mouse-pointer', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreicons-shape-mouse-pointer></coreicons-shape-mouse-pointer>'
        );
        const element = await page.find('coreicons-shape-mouse-pointer');
        expect(element).toHaveClass('hydrated');
    });
});
