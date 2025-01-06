import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-play-circle', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreicons-shape-play-circle></coreicons-shape-play-circle>'
        );
        const element = await page.find('coreicons-shape-play-circle');
        expect(element).toHaveClass('hydrated');
    });
});
