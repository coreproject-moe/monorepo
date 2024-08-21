
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-globe', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-globe></coreproject-shape-globe>');
        const element = await page.find('coreproject-shape-globe');
        expect(element).toHaveClass('hydrated');
    });
});
