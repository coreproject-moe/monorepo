
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-cloud-off', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-cloud-off></coreproject-shape-cloud-off>');
        const element = await page.find('coreproject-shape-cloud-off');
        expect(element).toHaveClass('hydrated');
    });
});
