import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-log-in', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-log-in></coreicons-shape-log-in>');
        const element = await page.find('coreicons-shape-log-in');
        expect(element).toHaveClass('hydrated');
    });
});
