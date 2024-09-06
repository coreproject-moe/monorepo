
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-logo', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-logo></coreproject-shape-logo>');
        const element = await page.find('coreproject-shape-logo');
        expect(element).toHaveClass('hydrated');
    });
});
