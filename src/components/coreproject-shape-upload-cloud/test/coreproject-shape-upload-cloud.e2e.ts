
import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-upload-cloud', () => {
    it('renders', async () => {
        const page = await newE2EPage();
        await page.setContent(
            '<coreproject-shape-upload-cloud></coreproject-shape-upload-cloud>'
        );

        const element = await page.find('coreproject-shape-upload-cloud');
        expect(element).toHaveClass('hydrated');
    });
});
    