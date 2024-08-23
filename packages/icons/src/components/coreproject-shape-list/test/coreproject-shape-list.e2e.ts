
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-list', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-list></coreproject-shape-list>');
        const element = await page.find('coreproject-shape-list');
        expect(element).toHaveClass('hydrated');
    });
});
