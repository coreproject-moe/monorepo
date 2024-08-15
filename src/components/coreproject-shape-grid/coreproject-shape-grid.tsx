import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'coreproject-shape-grid',
  styleUrl: 'coreproject-shape-grid.css',
  shadow: true,
})
export class CoreprojectShapeGrid {
  @Prop() width: string = '30';
  @Prop() height: string = '30';
  @Prop() _style: string;
  svg_element: SVGElement;

  @Watch('_style')
  watchStyle(newValue: string) {
    if (this.svg_element && newValue) this.svg_element.setAttribute('style', newValue);
  }

  @Watch('height')
  watchHeight(newValue: string) {
    if (this.svg_element && newValue) this.svg_element.setAttribute('height', newValue);
  }

  @Watch('width')
  watchWidth(newValue: string) {
    if (this.svg_element && newValue) this.svg_element.setAttribute('width', newValue);
  }

  render() {
    return (
      <Host>
        <svg
          ref={el => (this.svg_element = el as SVGElement)}
          width={this.width}
          height={this.height}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 3.75H3.75V12.5H12.5V3.75Z"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26.25 3.75H17.5V12.5H26.25V3.75Z"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M26.25 17.5H17.5V26.25H26.25V17.5Z"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12.5 17.5H3.75V26.25H12.5V17.5Z"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Host>
    );
  }
}

