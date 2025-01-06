import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-shape-log-out', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-shape-log-out></coreicons-shape-log-out>');
        const element = await page.find('coreicons-shape-log-out');
        expect(element).toHaveClass('hydrated');
    });
});
