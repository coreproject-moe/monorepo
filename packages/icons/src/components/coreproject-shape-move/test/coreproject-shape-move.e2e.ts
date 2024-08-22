
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-move', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-move></coreproject-shape-move>');
        const element = await page.find('coreproject-shape-move');
        expect(element).toHaveClass('hydrated');
    });
});
