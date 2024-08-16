import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { is_number } from '$utils/is_number';

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
    variant: 'circle' | 'octagon' | 'square' | 'no-border';

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
        if (this.variant === 'circle') {
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
                        <path d="M18.75 11.25L11.25 18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.25 11.25L18.75 18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Host>
            );
        } else if (this.variant === 'octagon') {
            return (
                <Host>
                    <svg ref={el => (this.svg_element = el as SVGElement)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.825 2.5H20.175L27.5 9.825V20.175L20.175 27.5H9.825L2.5 20.175V9.825L9.825 2.5Z"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path d="M18.75 11.25L11.25 18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.25 11.25L18.75 18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Host>
            );
        } else if (this.variant === 'square') {
            return (
                <Host>
                    <svg ref={el => (this.svg_element = el as SVGElement)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M23.75 3.75H6.25C4.86929 3.75 3.75 4.86929 3.75 6.25V23.75C3.75 25.1307 4.86929 26.25 6.25 26.25H23.75C25.1307 26.25 26.25 25.1307 26.25 23.75V6.25C26.25 4.86929 25.1307 3.75 23.75 3.75Z"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path d="M11.25 11.25L18.75 18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M18.75 11.25L11.25 18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Host>
            );
        } else if (this.variant === 'no-border') {
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
}