import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-icon-arrow', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<coreproject-icon-arrow></coreproject-icon-arrow>');

    const element = await page.find('coreproject-icon-arrow');
    expect(element).toHaveClass('hydrated');
  });
});
