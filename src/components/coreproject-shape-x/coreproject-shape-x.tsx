import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-x',
    shadow: true,
    styleUrl: 'coreproject-shape-x.css',
})
export class CoreprojectShapeX {
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
                    <path d="M22.5 7.5L7.5 22.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.5 7.5L22.5 22.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Host>
        );
    }
}
