import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-repeat', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-repeat></coreicons-shape-repeat>');
        const element = await page.find('coreicons-shape-repeat');
        expect(element).toHaveClass('hydrated');
    });
});
