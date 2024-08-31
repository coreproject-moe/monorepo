
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-preferences', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-preferences></coreproject-shape-preferences>');
        const element = await page.find('coreproject-shape-preferences');
        expect(element).toHaveClass('hydrated');
    });
});
