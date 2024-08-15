import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'coreproject-shape-airplay',
  styleUrl: 'coreproject-shape-airplay.css',
  shadow: true,
})
export class CoreprojectShapeAirplay {
  @Prop() width: string;
  @Prop() height: string;
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
            d="M6.25 21.25H5C4.33696 21.25 3.70107 20.9866 3.23223 20.5178C2.76339 20.0489 2.5 19.413 2.5 18.75V6.25C2.5 5.58696 2.76339 4.95107 3.23223 4.48223C3.70107 4.01339 4.33696 3.75 5 3.75H25C25.663 3.75 26.2989 4.01339 26.7678 4.48223C27.2366 4.95107 27.5 5.58696 27.5 6.25V18.75C27.5 19.413 27.2366 20.0489 26.7678 20.5178C26.2989 20.9866 25.663 21.25 25 21.25H23.75"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 18.75L21.25 26.25H8.75L15 18.75Z"
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
