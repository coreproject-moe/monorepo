import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-maximize',
    styleUrl: 'coreproject-shape-maximize.css',
    shadow: false,
})
export class CoreprojectShapeMaximize {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: { [key: string]: string };
    @Prop() variant: 'inward' | 'outward';

    render() {
        if (this.variant === 'inward') {
            return (
                <Host>
                    <svg width={this?.width} height={this?.height} style={this?._style} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1570_2554)">
                            <path d="M4.53564 6.2334L6.30341 8.00117L4.53564 9.76893" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.4644 9.76893L9.69659 8.00117L11.4644 6.2334" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.30336 8.00087H2.17857" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.69664 8.00087H13.8214" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1570_2554">
                                <rect width="10" height="10" fill="white" transform="translate(8 0.929688) rotate(45)" />
                            </clipPath>
                        </defs>
                    </svg>
                </Host>
            );
        } else if (this.variant === 'outward') {
            return (
                <Host>
                    <svg width={this?.width} height={this?.height} style={this?._style} viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1570_2531)" filter="url(#filter0_d_1570_2531)">
                            <path d="M13.5356 6.2334L15.3034 8.00117L13.5356 9.76893" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.46436 9.76893L4.69659 8.00117L6.46436 6.2334" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <g filter="url(#filter1_d_1570_2531)">
                                <path d="M15.3031 8.00087H11.1783" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <path d="M4.69688 8.00087H8.82167" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <filter
                                id="filter0_d_1570_2531"
                                x="-1.07129"
                                y="0.929688"
                                width="22.1426"
                                height="22.1426"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                            >
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1570_2531" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1570_2531" result="shape" />
                            </filter>
                            <filter id="filter1_d_1570_2531" x="6.67822" y="7.50098" width="13.125" height="9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1570_2531" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1570_2531" result="shape" />
                            </filter>
                            <clipPath id="clip0_1570_2531">
                                <rect width="10" height="10" fill="white" transform="translate(10 0.929688) rotate(45)" />
                            </clipPath>
                        </defs>
                    </svg>
                </Host>
            );
        }
    }
}
