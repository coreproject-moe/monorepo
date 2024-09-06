
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-bold', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-bold></coreproject-shape-bold>');
        const element = await page.find('coreproject-shape-bold');
        expect(element).toHaveClass('hydrated');
    });
});
