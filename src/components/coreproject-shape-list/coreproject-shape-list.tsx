import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-list',
    styleUrl: 'coreproject-shape-list.css',
    shadow: false,
})
export class CoreprojectShapeList {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: { [key: string]: string };
    render() {
        return (
            <Host>
                <svg width={this?.width} height={this?.height} style={this?._style} viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_1011_784)">
                        <path d="M9.6665 5H20.4998" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.6665 10H20.4998" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9.6665 15H20.4998" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.5 5H5.50833" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.5 10H5.50833" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.5 15H5.50833" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <filter id="filter0_d_1011_784" x="-1" y="0" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1011_784" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1011_784" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </Host>
        );
    }
}
