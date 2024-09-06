
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-flag', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-flag></coreproject-shape-flag>');
        const element = await page.find('coreproject-shape-flag');
        expect(element).toHaveClass('hydrated');
    });
});
