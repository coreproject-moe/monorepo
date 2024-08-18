import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-play-circle', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-play-circle></coreproject-shape-play-circle>');

        const element = await page.find('coreproject-shape-play-circle');
        expect(element).toHaveClass('hydrated');
    });
});
