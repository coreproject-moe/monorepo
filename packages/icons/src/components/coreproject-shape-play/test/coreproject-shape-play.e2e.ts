
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-play', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-play></coreproject-shape-play>');
        const element = await page.find('coreproject-shape-play');
        expect(element).toHaveClass('hydrated');
    });
});
