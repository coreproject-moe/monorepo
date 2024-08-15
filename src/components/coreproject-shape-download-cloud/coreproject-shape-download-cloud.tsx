import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'coreproject-shape-download-cloud',
  styleUrl: 'coreproject-shape-download-cloud.css',
  shadow: true,
})
export class CoreprojectShapeDownloadCloud {
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
          style={{ color: 'currentColor' }}
        >
          <g clip-path="url(#clip0_582_228)">
            <path
              d="M10 21.25L15 26.25L20 21.25"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 15V26.25"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M26.1 22.6124C27.1867 21.8482 28.0017 20.7576 28.4266 19.4989C28.8515 18.2401 28.8642 16.8787 28.463 15.6122C28.0617 14.3457 27.2673 13.24 26.1951 12.4556C25.1228 11.6712 23.8285 11.2489 22.5 11.2499H20.925C20.549 9.78476 19.8456 8.42398 18.8676 7.27002C17.8897 6.11606 16.6627 5.19899 15.279 4.58786C13.8953 3.97673 12.391 3.68745 10.8794 3.74181C9.36774 3.79617 7.88812 4.19275 6.55192 4.9017C5.21572 5.61064 4.05776 6.61348 3.16521 7.8347C2.27267 9.05593 1.66879 10.4637 1.39905 11.9521C1.12931 13.4405 1.20074 14.9707 1.60795 16.4274C2.01516 17.8842 2.74755 19.2296 3.74998 20.3624"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_582_228">
              <rect width="30" height="30" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Host>
    );
  }
}
