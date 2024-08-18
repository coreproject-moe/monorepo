import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-unlock', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-unlock></coreproject-shape-unlock>');

        const element = await page.find('coreproject-shape-unlock');
        expect(element).toHaveClass('hydrated');
    });
});
