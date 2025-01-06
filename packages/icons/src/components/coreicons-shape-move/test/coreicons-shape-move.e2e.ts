import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-move', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-move></coreicons-shape-move>');
        const element = await page.find('coreicons-shape-move');
        expect(element).toHaveClass('hydrated');
    });
});
