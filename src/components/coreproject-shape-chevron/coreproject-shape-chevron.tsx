import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'coreproject-shape-chevron',
  styleUrl: 'coreproject-shape-chevron.css',
  shadow: true,
})
export class CoreprojectShapeChevron {
  @Prop() width: string = '30';
  @Prop() height: string = '30';
  @Prop() _style: string;
  @Prop() variant: 'up' | 'down' | 'left' | 'right' = 'down';
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
          {this.variant === 'down' && (
            <path
              d="M7.5 11.25L15 18.75L22.5 11.25"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          )}
          {this.variant === 'left' && (
            <path
              d="M18.75 22.5L11.25 15L18.75 7.5"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          )}
          {this.variant === 'right' && (
            <path
              d="M11.25 22.5L18.75 15L11.25 7.5"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          )}
          {this.variant === 'up' && (
            <path
              d="M22.5 18.75L15 11.25L7.5 18.75"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          )}
        </svg>
      </Host>
    );
  }
}
