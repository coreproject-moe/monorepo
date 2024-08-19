import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-download-cloud', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-download-cloud></coreproject-shape-download-cloud>');

        const element = await page.find('coreproject-shape-download-cloud');
        expect(element).toHaveClass('hydrated');
    });
});
