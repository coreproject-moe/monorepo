
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-bar-chart', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-bar-chart></coreproject-shape-bar-chart>');
        const element = await page.find('coreproject-shape-bar-chart');
        expect(element).toHaveClass('hydrated');
    });
});
