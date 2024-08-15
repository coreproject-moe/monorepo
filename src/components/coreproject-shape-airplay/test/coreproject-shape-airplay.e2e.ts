import { newE2EPage } from '@stencil/core/testing';

describe('coreproject-shape-airplay', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<coreproject-shape-airplay></coreproject-shape-airplay>');

    const element = await page.find('coreproject-shape-airplay');
    expect(element).toHaveClass('hydrated');
  });
});
