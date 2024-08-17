import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-delete',
    shadow: true,
    styleUrl: 'coreproject-shape-delete.css',
})
export class CoreprojectShapeDelete {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;

    render() {
        return (
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_582_220)">
                        <path
                            d="M26.25 5H10L1.25 15L10 25H26.25C26.913 25 27.5489 24.7366 28.0178 24.2678C28.4866 23.7989 28.75 23.163 28.75 22.5V7.5C28.75 6.83696 28.4866 6.20107 28.0178 5.73223C27.5489 5.26339 26.913 5 26.25 5V5Z"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path d="M22.5 11.25L15 18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15 11.25L22.5 18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_582_220">
                            <rect fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </Host>
        );
    }
}
