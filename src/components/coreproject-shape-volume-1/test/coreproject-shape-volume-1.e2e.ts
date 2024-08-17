import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-volume-1', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-volume-1></coreproject-shape-volume-1>');

        const element = await page.find('coreproject-shape-volume-1');
        expect(element).toHaveClass('hydrated');
    });
});
