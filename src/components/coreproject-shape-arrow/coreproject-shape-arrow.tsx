import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-arrow',
    shadow: true,
    styleUrl: 'coreproject-shape-arrow.css',
})
export class CoreprojectShapeArrow {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    @Prop() variant: 'up' | 'down' | 'left' | 'right' | 'up-left' | 'up-right' | 'down-left' | 'down-right' = 'up';

    render() {
        if (this.variant === 'up') {
            return (
                <Host>
                    <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_582_108)">
                            <path d="M15 23.75V6.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.25 15L15 6.25L23.75 15" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <filter id="filter0_d_582_108" x="-4" y="0" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_582_108" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_582_108" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </Host>
            );
        } else if (this.variant === 'down') {
            return (
                <Host>
                    <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 6.25V23.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M23.75 15L15 23.75L6.25 15" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Host>
            );
        } else if (this.variant === 'left') {
            return (
                <Host>
                    <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.75 15H6.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15 23.75L6.25 15L15 6.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Host>
            );
        } else if (this.variant === 'right') {
            return (
                <Host>
                    <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.25 15H23.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15 6.25L23.75 15L15 23.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Host>
            );
        } else if (this.variant === 'up-left') {
            return (
                <Host>
                    <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.25 21.25L8.75 8.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.75 21.25V8.75H21.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Host>
            );
        } else if (this.variant === 'up-right') {
            return (
                <Host>
                    <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.75 21.25L21.25 8.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.75 8.75H21.25V21.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Host>
            );
        } else if (this.variant === 'down-left') {
            return (
                <Host>
                    <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.25 8.75L8.75 21.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.25 21.25H8.75V8.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Host>
            );
        } else if (this.variant === 'down-right') {
            return (
                <Host>
                    <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.75 8.75L21.25 21.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.25 8.75V21.25H8.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Host>
            );
        }
    }
}
