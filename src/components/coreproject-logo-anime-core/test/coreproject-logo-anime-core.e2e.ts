import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<coreproject-icon></coreproject-icon>');

    const element = await page.find('coreproject-icon');
    expect(element).toHaveClass('hydrated');
  });
});
