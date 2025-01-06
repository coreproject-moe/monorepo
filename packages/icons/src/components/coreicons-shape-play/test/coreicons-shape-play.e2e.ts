import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-play', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-play></coreicons-shape-play>');
        const element = await page.find('coreicons-shape-play');
        expect(element).toHaveClass('hydrated');
    });
});
