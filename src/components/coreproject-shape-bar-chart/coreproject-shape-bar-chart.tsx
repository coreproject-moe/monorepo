import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'coreproject-shape-bar-chart',
  styleUrl: 'coreproject-shape-bar-chart.css',
  shadow: true,
})
export class CoreprojectShapeBarChart {
  @Prop() width: string = '30';
  @Prop() height: string = '30';
  @Prop() _style: string;
  svg_element: SVGElement;

  @Watch('_style')
  watch_Style(newValue: string) {
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
          width={this?.width}
          height={this?.height}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 25V12.5"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22.5 25V5"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.5 25V20"
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
