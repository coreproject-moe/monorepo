import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-hash',
    shadow: true,
    styleUrl: 'coreproject-shape-hash.css',
})
export class CoreprojectShapeHash {
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
                    <path d="M5 11.25H25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5 18.75H25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.5 3.75L10 26.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M20 3.75L17.5 26.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Host>
        );
    }
}
