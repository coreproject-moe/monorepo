import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-user-x', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent('<coreproject-shape-user-x></coreproject-shape-user-x>');

        const element = await page.find('coreproject-shape-user-x');
        expect(element).toHaveClass('hydrated');
    });
});
