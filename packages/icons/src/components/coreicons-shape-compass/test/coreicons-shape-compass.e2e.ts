import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-compass', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-compass></coreicons-shape-compass>');
        const element = await page.find('coreicons-shape-compass');
        expect(element).toHaveClass('hydrated');
    });
});
