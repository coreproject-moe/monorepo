import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-zap-off',
    shadow: true,
    styleUrl: 'coreproject-shape-zap-off.css',
})
export class CoreprojectShapeZapOff {
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
                    <g clip-path="url(#clip0_583_619)">
                        <path d="M15.5124 8.4375L16.2499 2.5L13.2124 6.15" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M23.2127 16.1375L26.2502 12.5H19.5752" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10 10L3.75 17.5H15L13.75 27.5L20 20" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1.25 1.25L28.75 28.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_583_619">
                            <rect fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </Host>
        );
    }
}
