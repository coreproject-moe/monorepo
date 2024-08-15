import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'coreproject-shape-arrow',
  styleUrl: 'coreproject-shape-arrow.css',
  shadow: true,
})
export class CoreprojectShapeArrow {
  @Prop() width: string;
  @Prop() height: string;
  @Prop() _style: string;
  @Prop() variant: 'down' | 'down-left' | 'down-right' | 'left' | 'right' | 'up' | 'up-left' | 'up-right';
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
          {this.variant === 'down' && (
            <g>
              <path d="M15 6.25V23.75" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M23.75 15L15 23.75L6.25 15" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          )}
          {this.variant === 'down-left' && (
            <g>
              <path d="M21.25 8.75L8.75 21.25" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21.25 21.25H8.75V8.75" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          )}
          {this.variant === 'down-right' && (
            <g>
              <path d="M8.75 8.75L21.25 21.25" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21.25 8.75V21.25H8.75" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          )}
          {this.variant === 'left' && (
            <g>
              <path d="M23.75 15H6.25" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15 23.75L6.25 15L15 6.25" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          )}
          {this.variant === 'right' && (
            <g>
              <path d="M6.25 15H23.75" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15 6.25L23.75 15L15 23.75" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          )}
          {this.variant === 'up' && (
            <g>
              <path d="M15 23.75V6.25" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6.25 15L15 6.25L23.75 15" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          )}
          {this.variant === 'up-left' && (
            <g>
              <path d="M21.25 21.25L8.75 8.75" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.75 21.25V8.75H21.25" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          )}
          {this.variant === 'up-right' && (
            <g>
              <path d="M8.75 21.25L21.25 8.75" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.75 8.75H21.25V21.25" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          )}
        </svg>
      </Host>
    );
  }
}
