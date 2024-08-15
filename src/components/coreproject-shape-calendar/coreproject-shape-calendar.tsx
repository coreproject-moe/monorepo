import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'coreproject-shape-calendar',
  styleUrl: 'coreproject-shape-calendar.css',
  shadow: true,
})
export class CoreprojectShapeCalendar {
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
          width={this?.width}
          height={this?.height}
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: 'currentColor' }}
        >
          <path
            d="M23.75 5H6.25C4.86929 5 3.75 6.11929 3.75 7.5V25C3.75 26.3807 4.86929 27.5 6.25 27.5H23.75C25.1307 27.5 26.25 26.3807 26.25 25V7.5C26.25 6.11929 25.1307 5 23.75 5Z"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 2.5V7.5"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10 2.5V7.5"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.75 12.5H26.25"
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
