import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-info', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-info></coreproject-shape-info>');
        const element = await page.find('coreproject-shape-info');
        expect(element).toHaveClass('hydrated');
    });
});
