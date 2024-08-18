import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-rotate',
    shadow: true,
    styleUrl: 'coreproject-shape-rotate.css',
})
export class CoreprojectShapeRotate {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    @Prop() variant: 'cw' | 'ccw' = 'cw';

    render() {
        if (this.variant === 'cw') {
            return (
                <Host>
                    <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_583_457)">
                            <path d="M28.75 5V12.5H21.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M25.6124 18.75C24.7998 21.0499 23.2618 23.0234 21.23 24.3731C19.1983 25.7229 16.7829 26.3757 14.3479 26.2333C11.9128 26.0908 9.59004 25.1608 7.72954 23.5834C5.86904 22.0059 4.57163 19.8665 4.03281 17.4876C3.49398 15.1086 3.74295 12.619 4.74218 10.3939C5.74141 8.16871 7.43677 6.3286 9.57279 5.15082C11.7088 3.97304 14.1698 3.52139 16.5848 3.86395C18.9998 4.2065 21.2381 5.32469 22.9624 7.05002L28.7499 12.5"
                                stroke="white"
                                stroke-
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_583_457">
                                <rect fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </Host>
            );
        } else if (this.variant === 'ccw') {
            return (
                <Host>
                    <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_583_454)">
                            <path d="M1.25 5V12.5H8.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M4.3875 18.7501C5.19799 21.0505 6.73417 23.0253 8.76457 24.3768C10.795 25.7283 13.2096 26.3833 15.6446 26.2431C18.0797 26.103 20.4032 25.1753 22.2652 23.5998C24.1271 22.0242 25.4266 19.8863 25.9678 17.508C26.509 15.1297 26.2626 12.64 25.2658 10.4139C24.2689 8.18786 22.5757 6.34605 20.441 5.16601C18.3064 3.98598 15.8461 3.53164 13.4308 3.87145C11.0156 4.21127 8.77614 5.32683 7.05 7.05006L1.25 12.5001"
                                stroke="white"
                                stroke-
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_583_454">
                                <rect fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </Host>
            );
        }
    }
}
