import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-eye-off',
    shadow: true,
    styleUrl: 'coreproject-shape-eye-off.css',
})
export class CoreprojectShapeEyeOff {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;

    render() {
        return (
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_582_247)">
                        <path
                            d="M17.65 17.65C17.3067 18.0185 16.8927 18.314 16.4327 18.5189C15.9727 18.7239 15.4761 18.8341 14.9726 18.843C14.4691 18.8519 13.969 18.7592 13.502 18.5706C13.0351 18.382 12.6109 18.1013 12.2548 17.7452C11.8987 17.3891 11.618 16.965 11.4294 16.498C11.2408 16.0311 11.1482 15.5309 11.157 15.0274C11.1659 14.5239 11.2761 14.0273 11.4811 13.5673C11.6861 13.1073 11.9816 12.6933 12.35 12.35M22.425 22.425C20.2882 24.0538 17.6864 24.9561 15 25C6.25 25 1.25 15 1.25 15C2.80486 12.1024 4.96142 9.57079 7.575 7.57503L22.425 22.425ZM12.375 5.30003C13.2354 5.09863 14.1163 4.99795 15 5.00003C23.75 5.00003 28.75 15 28.75 15C27.9912 16.4195 27.0863 17.756 26.05 18.9875L12.375 5.30003Z"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path d="M1.25 1.25L28.75 28.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_582_247">
                            <rect fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </Host>
        );
    }
}
