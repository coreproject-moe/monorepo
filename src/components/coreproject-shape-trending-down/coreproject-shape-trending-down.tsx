import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-trending-down',
    shadow: true,
    styleUrl: 'coreproject-shape-trending-down.css',
})
export class CoreprojectShapeTrendingDown {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;

    render() {
        return (
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_583_537)">
                        <path d="M28.75 22.5L16.875 10.625L10.625 16.875L1.25 7.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.25 22.5H28.75V15" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_583_537">
                            <rect fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </Host>
        );
    }
}
