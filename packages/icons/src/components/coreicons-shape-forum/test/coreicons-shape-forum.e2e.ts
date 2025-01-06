import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-forum', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-forum></coreicons-shape-forum>');
        const element = await page.find('coreicons-shape-forum');
        expect(element).toHaveClass('hydrated');
    });
});
