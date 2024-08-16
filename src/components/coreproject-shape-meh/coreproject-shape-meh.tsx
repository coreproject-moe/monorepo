import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { is_number } from '$utils/is_number';

@Component({
    tag: 'coreproject-shape-meh',
    shadow: true,
    styleUrl: 'coreproject-shape-meh.css',
})
export class CoreprojectShapeMeh {
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
        if (!is_number(newValue)) throw new Error(`height:${newValue} is not a valid number or a string of number`);

        if (this.svg_element && newValue) this.svg_element.setAttribute('height', newValue);
    }

    @Watch('width')
    watchWidth(newValue: string) {
        if (!is_number(newValue)) throw new Error(`width:${newValue} is not a valid number or a string of number`);

        if (this.svg_element && newValue) this.svg_element.setAttribute('width', newValue);
    }

    render() {
        return (
            <Host>
                <svg ref={el => (this.svg_element = el as SVGElement)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"
                        stroke="white"
                        stroke-
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path d="M10 18.75H20" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.25 11.25H11.2625" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18.75 11.25H18.7625" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Host>
        );
    }
}