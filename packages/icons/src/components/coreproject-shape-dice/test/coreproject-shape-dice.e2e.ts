
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-dice', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-dice></coreproject-shape-dice>');
        const element = await page.find('coreproject-shape-dice');
        expect(element).toHaveClass('hydrated');
    });
});
