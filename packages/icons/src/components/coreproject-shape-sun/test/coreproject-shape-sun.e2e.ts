
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-sun', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-sun></coreproject-shape-sun>');
        const element = await page.find('coreproject-shape-sun');
        expect(element).toHaveClass('hydrated');
    });
});
