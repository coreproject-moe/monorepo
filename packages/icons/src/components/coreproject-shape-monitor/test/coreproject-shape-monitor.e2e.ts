
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-monitor', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-monitor></coreproject-shape-monitor>');
        const element = await page.find('coreproject-shape-monitor');
        expect(element).toHaveClass('hydrated');
    });
});
