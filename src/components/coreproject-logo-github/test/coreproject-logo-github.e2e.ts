
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-logo-github', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-logo-github></coreproject-logo-github>'
        );

        const element = await page.find('coreproject-logo-github');
        expect(element).toHaveClass('hydrated');
    });
});
    