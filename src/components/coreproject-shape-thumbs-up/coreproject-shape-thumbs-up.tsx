import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { is_number } from '$utils/is_number';

@Component({
    tag: 'coreproject-shape-thumbs-up',
    shadow: true,
    styleUrl: 'coreproject-shape-thumbs-up.css',
})
export class CoreprojectShapeThumbsUp {
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
                        d="M8.75 27.5H5C4.33696 27.5 3.70107 27.2366 3.23223 26.7678C2.76339 26.2989 2.5 25.663 2.5 25V16.25C2.5 15.587 2.76339 14.9511 3.23223 14.4822C3.70107 14.0134 4.33696 13.75 5 13.75H8.75M17.5 11.25V6.25C17.5 5.25544 17.1049 4.30161 16.4017 3.59835C15.6984 2.89509 14.7446 2.5 13.75 2.5L8.75 13.75V27.5H22.85C23.4529 27.5068 24.038 27.2955 24.4974 26.905C24.9568 26.5145 25.2596 25.9711 25.35 25.375L27.075 14.125C27.1294 13.7667 27.1052 13.4009 27.0042 13.0528C26.9031 12.7048 26.7276 12.3829 26.4898 12.1094C26.252 11.8359 25.9576 11.6174 25.627 11.469C25.2963 11.3206 24.9374 11.2459 24.575 11.25H17.5Z"
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
