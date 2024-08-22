import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-refresh', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-refresh></coreproject-shape-refresh>');
        const element = await page.find('coreproject-shape-refresh');
        expect(element).toHaveClass('hydrated');
    });
});
