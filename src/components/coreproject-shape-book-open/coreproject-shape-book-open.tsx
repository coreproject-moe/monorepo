import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-book-open',
    styleUrl: 'coreproject-shape-book-open.css',
    shadow: true,
})
export class CoreprojectShapeBookOpen {
    @Prop() variant: 'open' | 'outline';
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;

    render() {
        if (this.variant === 'open') {
            return (
                <Host>
                    <svg style={css_to_jsx(this?._style)} width={this?.width} height={this?.height} viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_1951_2801)">
                            <path
                                d="M6 3H12C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V21C16 20.2044 15.6839 19.4413 15.1213 18.8787C14.5587 18.3161 13.7956 18 13 18H6V3Z"
                                stroke="currentColor"
                                stroke-width="3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M26 3H20C18.9391 3 17.9217 3.42143 17.1716 4.17157C16.4214 4.92172 16 5.93913 16 7V21C16 20.2044 16.3161 19.4413 16.8787 18.8787C17.4413 18.3161 18.2044 18 19 18H26V3Z"
                                stroke="currentColor"
                                stroke-width="3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                        <defs>
                            <filter id="filter0_d_1951_2801" x="0" y="0" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1951_2801" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1951_2801" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </Host>
            );
        } else if (this.variant === 'outline') {
            return (
                <Host>
                    <svg style={css_to_jsx(this?._style)} width={this?.width} height={this?.height} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.5 3.75H10C11.3261 3.75 12.5979 4.27678 13.5355 5.21447C14.4732 6.15215 15 7.42392 15 8.75V26.25C15 25.2554 14.6049 24.3016 13.9017 23.5983C13.1984 22.8951 12.2446 22.5 11.25 22.5H2.5V3.75Z"
                            stroke="currentColor"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                        <path
                            d="M27.5 3.75H20C18.6739 3.75 17.4021 4.27678 16.4645 5.21447C15.5268 6.15215 15 7.42392 15 8.75V26.25C15 25.2554 15.3951 24.3016 16.0983 23.5983C16.8016 22.8951 17.7554 22.5 18.75 22.5H27.5V3.75Z"
                            stroke="currentColor"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        ></path>
                    </svg>
                </Host>
            );
        }
    }
}
