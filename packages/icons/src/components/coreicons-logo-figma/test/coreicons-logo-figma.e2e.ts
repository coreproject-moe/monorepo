import { newE2EPage } from '@stencil/core/testing';

describe('coreicons-logo-figma', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreicons-logo-figma></coreicons-logo-figma>');
        const element = await page.find('coreicons-logo-figma');
        expect(element).toHaveClass('hydrated');
    });
});
