import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { is_number } from '$utils/is_number';

@Component({
    tag: 'coreproject-shape-smile',
    shadow: true,
    styleUrl: 'coreproject-shape-smile.css',
})
export class CoreprojectShapeSmile {
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
                <svg ref={el => (this.svg_element = el as SVGElement)} viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_583_490)">
                        <path
                            d="M18 27.5C24.9036 27.5 30.5 21.9036 30.5 15C30.5 8.09644 24.9036 2.5 18 2.5C11.0964 2.5 5.5 8.09644 5.5 15C5.5 21.9036 11.0964 27.5 18 27.5Z"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path d="M13 17.5C13 17.5 14.875 20 18 20C21.125 20 23 17.5 23 17.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M14.25 11.25H14.2625" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.75 11.25H21.7625" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <filter id="filter0_d_583_490" x="-1" y="0" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_583_490" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_583_490" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </Host>
        );
    }
}