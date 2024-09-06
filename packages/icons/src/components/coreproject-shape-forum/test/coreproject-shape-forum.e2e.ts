
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-forum', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-forum></coreproject-shape-forum>');
        const element = await page.find('coreproject-shape-forum');
        expect(element).toHaveClass('hydrated');
    });
});
