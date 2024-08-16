import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { is_number } from '$utils/is_number';

@Component({
    tag: 'coreproject-shape-gift',
    shadow: true,
    styleUrl: 'coreproject-shape-gift.css',
})
export class CoreprojectShapeGift {
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
                    <path d="M25 15V27.5H5V15" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M27.5 8.75H2.5V15H27.5V8.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15 27.5V8.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M15 8.75H9.375C8.5462 8.75 7.75134 8.42076 7.16529 7.83471C6.57924 7.24866 6.25 6.4538 6.25 5.625C6.25 4.7962 6.57924 4.00134 7.16529 3.41529C7.75134 2.82924 8.5462 2.5 9.375 2.5C13.75 2.5 15 8.75 15 8.75Z"
                        stroke="white"
                        stroke-
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M15 8.75H20.625C21.4538 8.75 22.2487 8.42076 22.8347 7.83471C23.4208 7.24866 23.75 6.4538 23.75 5.625C23.75 4.7962 23.4208 4.00134 22.8347 3.41529C22.2487 2.82924 21.4538 2.5 20.625 2.5C16.25 2.5 15 8.75 15 8.75Z"
                        stroke="white"
                        stroke-
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </Host>
        );
    }
}
