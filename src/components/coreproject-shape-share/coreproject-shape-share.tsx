import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-share',
    shadow: true,
    styleUrl: 'coreproject-shape-share.css',
})
export class CoreprojectShapeShare {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;

    render() {
        return (
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 32 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_583_467)">
                        <path
                            d="M6 15V25C6 25.663 6.26339 26.2989 6.73223 26.7678C7.20107 27.2366 7.83696 27.5 8.5 27.5H23.5C24.163 27.5 24.7989 27.2366 25.2678 26.7678C25.7366 26.2989 26 25.663 26 25V15"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path d="M21 7.5L16 2.5L11 7.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M16 2.5V18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <filter id="filter0_d_583_467" x="-3" y="0" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_583_467" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_583_467" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </Host>
        );
    }
}
