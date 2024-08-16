import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-link-2',
    shadow: true,
    styleUrl: 'coreproject-shape-link-2.css',
})
export class CoreprojectShapeLink2 {
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
                    <g clip-path="url(#clip0_582_344)">
                        <path
                            d="M18.75 8.75H22.5C23.3208 8.75 24.1335 8.91166 24.8918 9.22575C25.6501 9.53984 26.3391 10.0002 26.9194 10.5806C27.4998 11.1609 27.9602 11.8499 28.2742 12.6082C28.5883 13.3665 28.75 14.1792 28.75 15C28.75 15.8208 28.5883 16.6335 28.2742 17.3918C27.9602 18.1501 27.4998 18.8391 26.9194 19.4194C26.3391 19.9998 25.6501 20.4602 24.8918 20.7742C24.1335 21.0883 23.3208 21.25 22.5 21.25H18.75M11.25 21.25H7.5C6.67924 21.25 5.86651 21.0883 5.10823 20.7742C4.34994 20.4602 3.66095 19.9998 3.08058 19.4194C1.90848 18.2473 1.25 16.6576 1.25 15C1.25 13.3424 1.90848 11.7527 3.08058 10.5806C4.25269 9.40848 5.8424 8.75 7.5 8.75H11.25"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path d="M10 15H20" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_582_344">
                            <rect fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </Host>
        );
    }
}
