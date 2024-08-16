import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-toggle-left',
    shadow: true,
    styleUrl: 'coreproject-shape-toggle-left.css',
})
export class CoreprojectShapeToggleLeft {
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
                <svg ref={el => (this.svg_element = el as SVGElement)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_583_521)">
                        <path
                            d="M20 6.25H10C5.16751 6.25 1.25 10.1675 1.25 15C1.25 19.8325 5.16751 23.75 10 23.75H20C24.8325 23.75 28.75 19.8325 28.75 15C28.75 10.1675 24.8325 6.25 20 6.25Z"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M10 18.75C12.0711 18.75 13.75 17.0711 13.75 15C13.75 12.9289 12.0711 11.25 10 11.25C7.92893 11.25 6.25 12.9289 6.25 15C6.25 17.0711 7.92893 18.75 10 18.75Z"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_583_521">
                            <rect fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </Host>
        );
    }
}
