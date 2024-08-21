
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-message-circle', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-message-circle></coreproject-shape-message-circle>'
        );

        const element = await page.find('coreproject-shape-message-circle');
        expect(element).toHaveClass('hydrated');
    });
});
    