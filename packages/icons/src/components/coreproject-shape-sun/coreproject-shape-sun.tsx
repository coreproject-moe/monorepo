import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-sun',
    shadow: true,
    styleUrl: 'coreproject-shape-sun.css',
})
export class CoreprojectShapeSun {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;

    render() {
        return (
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_583_501)" filter="url(#filter0_d_583_501)">
                        <path
                            d="M19 21.25C22.4518 21.25 25.25 18.4518 25.25 15C25.25 11.5482 22.4518 8.75 19 8.75C15.5482 8.75 12.75 11.5482 12.75 15C12.75 18.4518 15.5482 21.25 19 21.25Z"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path d="M19 1.25V3.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M19 26.25V28.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.2749 5.2749L11.0499 7.0499" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M26.9502 22.9502L28.7252 24.7252" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.25 15H7.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M30.25 15H32.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.2749 24.7252L11.0499 22.9502" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M26.9502 7.0499L28.7252 5.2749" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <filter id="filter0_d_583_501" x="0" y="0" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_583_501" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_583_501" result="shape" />
                        </filter>
                        <clipPath id="clip0_583_501">
                            <rect fill="white" transform="translate(4)" />
                        </clipPath>
                    </defs>
                </svg>
            </Host>
        );
    }
}
