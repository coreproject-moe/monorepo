
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-box', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-box></coreproject-shape-box>');
        const element = await page.find('coreproject-shape-box');
        expect(element).toHaveClass('hydrated');
    });
});
