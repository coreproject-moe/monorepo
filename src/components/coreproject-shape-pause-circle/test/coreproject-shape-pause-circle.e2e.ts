import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-pause-circle', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-pause-circle></coreproject-shape-pause-circle>');

        const element = await page.find('coreproject-shape-pause-circle');
        expect(element).toHaveClass('hydrated');
    });
});
