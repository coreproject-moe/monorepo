import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'coreproject-shape-corner',
  styleUrl: 'coreproject-shape-corner.css',
  shadow: true,
})
export class CoreprojectShapeCorner {
  @Prop() width: string = '30';
  @Prop() height: string = '30';
  @Prop() _style: string;
  @Prop() variant: 'down-left' | 'down-right' | 'left-down' | 'left-up' | 'right-down' | 'right-up' | 'up-left' | 'up-right' = 'down-left';
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
          style={{ color: 'currentColor' }}
        >
          {this.variant === 'down-left' && (
            <g>
              <path
                d="M11.25 12.5L5 18.75L11.25 25"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25 5V13.75C25 15.0761 24.4732 16.3479 23.5355 17.2855C22.5979 18.2232 21.3261 18.75 20 18.75H5"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          )}
          {this.variant === 'down-right' && (
            <g>
              <path
                d="M18.75 12.5L25 18.75L18.75 25"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 5V13.75C5 15.0761 5.52678 16.3479 6.46447 17.2855C7.40215 18.2232 8.67392 18.75 10 18.75H25"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          )}
          {this.variant === 'left-down' && (
            <g>
              <path
                d="M17.5 18.75L11.25 25L5 18.75"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25 5H16.25C14.9239 5 13.6521 5.52678 12.7145 6.46447C11.7768 7.40215 11.25 8.67392 11.25 10V25"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          )}
          {this.variant === 'left-up' && (
            <g>
              <path
                d="M17.5 11.25L11.25 5L5 11.25"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25 25H16.25C14.9239 25 13.6521 24.4732 12.7145 23.5355C11.7768 22.5979 11.25 21.3261 11.25 20V5"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          )}
          {this.variant === 'right-down' && (
            <g>
              <path
                d="M12.5 18.75L18.75 25L25 18.75"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 5H13.75C15.0761 5 16.3479 5.52678 17.2855 6.46447C18.2232 7.40215 18.75 8.67392 18.75 10V25"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          )}
          {this.variant === 'right-up' && (
            <g>
              <path
                d="M12.5 11.25L18.75 5L25 11.25"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 25H13.75C15.0761 25 16.3479 24.4732 17.2855 23.5355C18.2232 22.5979 18.75 21.3261 18.75 20V5"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          )}
          {this.variant === 'up-left' && (
            <g>
              <path
                d="M11.25 17.5L5 11.25L11.25 5"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25 25V16.25C25 14.9239 24.4732 13.6521 23.5355 12.7145C22.5979 11.7768 21.3261 11.25 20 11.25H5"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          )}
          {this.variant === 'up-right' && (
            <g>
              <path
                d="M18.75 17.5L25 11.25L18.75 5"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5 25V16.25C5 14.9239 5.52678 13.6521 6.46447 12.7145C7.40215 11.7768 8.67392 11.25 10 11.25H25"
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
