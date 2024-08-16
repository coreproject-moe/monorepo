import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { is_number } from '$utils/is_number';

@Component({
    tag: 'coreproject-shape-shield-off',
    shadow: true,
    styleUrl: 'coreproject-shape-shield-off.css',
})
export class CoreprojectShapeShieldOff {
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
                <svg ref={el => (this.svg_element = el as SVGElement)} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_583_479)" filter="url(#filter0_d_583_479)">
                        <path
                            d="M28.6123 17.5C28.8636 16.6902 28.9942 15.8478 28.9998 15V6.25L18.9998 2.5L15.0498 3.975"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M9.9125 5.9126L9 6.2501V15.0001C9 22.5001 19 27.5001 19 27.5001C21.6463 26.1038 24.0246 24.2502 26.025 22.0251"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path d="M5.25 1.25L32.75 28.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <filter id="filter0_d_583_479" x="0" y="0" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_583_479" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_583_479" result="shape" />
                        </filter>
                        <clipPath id="clip0_583_479">
                            <rect fill="white" transform="translate(4)" />
                        </clipPath>
                    </defs>
                </svg>
            </Host>
        );
    }
}