
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-edit', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-edit></coreproject-shape-edit>'
        );

        const element = await page.find('coreproject-shape-edit');
        expect(element).toHaveClass('hydrated');
    });
});
    