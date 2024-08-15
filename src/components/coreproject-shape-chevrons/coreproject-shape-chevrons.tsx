import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'coreproject-shape-chevrons',
  styleUrl: 'coreproject-shape-chevrons.css',
  shadow: true,
})
export class CoreprojectShapeChevrons {
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
            <g>
              <path
                d="M8.75 16.25L15 22.5L21.25 16.25"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.75 7.5L15 13.75L21.25 7.5"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          )}
          {this.variant === 'left' && (
            <g>
              <path
                d="M13.75 21.25L7.5 15L13.75 8.75"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22.5 21.25L16.25 15L22.5 8.75"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          )}
          {this.variant === 'right' && (
            <g>
              <path
                d="M16.25 21.25L22.5 15L16.25 8.75"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.5 21.25L13.75 15L7.5 8.75"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          )}
          {this.variant === 'up' && (
            <g>
              <path
                d="M21.25 13.75L15 7.5L8.75 13.75"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.25 22.5L15 16.25L8.75 22.5"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          )}
        </svg>
      </Host>
    );
  }
}
