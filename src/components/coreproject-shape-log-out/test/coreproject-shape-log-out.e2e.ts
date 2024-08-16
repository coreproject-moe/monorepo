import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-log-out', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-log-out></coreproject-shape-log-out>');

        const element = await page.find('coreproject-shape-log-out');
        expect(element).toHaveClass('hydrated');
    });
});
