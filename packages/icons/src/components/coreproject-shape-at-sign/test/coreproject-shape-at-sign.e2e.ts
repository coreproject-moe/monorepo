
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-at-sign', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-at-sign></coreproject-shape-at-sign>');
        const element = await page.find('coreproject-shape-at-sign');
        expect(element).toHaveClass('hydrated');
    });
});
