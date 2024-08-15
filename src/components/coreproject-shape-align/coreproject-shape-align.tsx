import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'coreproject-shape-align',
  styleUrl: 'coreproject-shape-align.css',
  shadow: true,
})
export class CoreprojectShapeAlign {
  @Prop() width: string;
  @Prop() height: string;
  @Prop() _style: string;
  @Prop() variant: 'center' | 'justify' | 'left' | 'right';
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
          {this.variant === 'center' && (
            <g>
              <path d="M22.5 12.5H7.5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.25 7.5H3.75" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.25 17.5H3.75" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22.5 22.5H7.5" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          )}
          {this.variant === 'justify' && (
            <g>
              <path d="M26.25 12.5H3.75" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.25 7.5H3.75" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.25 17.5H3.75" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.25 22.5H3.75" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          )}
          {this.variant === 'left' && (
            <g>
              <path d="M21.25 12.5H3.75" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.25 7.5H3.75" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.25 17.5H3.75" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21.25 22.5H3.75" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          )}
          {this.variant === 'right' && (
            <g>
              <path d="M26.25 12.5H8.75" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.25 7.5H3.75" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.25 17.5H3.75" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.25 22.5H8.75" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </g>
          )}
        </svg>
      </Host>
    );
  }
}
