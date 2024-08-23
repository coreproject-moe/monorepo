import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-rotate', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-rotate></coreproject-shape-rotate>');
        const element = await page.find('coreproject-shape-rotate');
        expect(element).toHaveClass('hydrated');
    });
});
