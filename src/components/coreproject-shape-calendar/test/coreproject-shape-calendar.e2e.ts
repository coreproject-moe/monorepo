import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-calendar', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-calendar></coreproject-shape-calendar>');
        const element = await page.find('coreproject-shape-calendar');
        expect(element).toHaveClass('hydrated');
    });
});
