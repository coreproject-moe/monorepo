import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-toggle-right',
    shadow: true,
    styleUrl: 'coreproject-shape-toggle-right.css',
})
export class CoreprojectShapeToggleRight {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;

    render() {
        return (
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_583_524)">
                        <path
                            d="M20 6.25H10C5.16751 6.25 1.25 10.1675 1.25 15C1.25 19.8325 5.16751 23.75 10 23.75H20C24.8325 23.75 28.75 19.8325 28.75 15C28.75 10.1675 24.8325 6.25 20 6.25Z"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M20 18.75C22.0711 18.75 23.75 17.0711 23.75 15C23.75 12.9289 22.0711 11.25 20 11.25C17.9289 11.25 16.25 12.9289 16.25 15C16.25 17.0711 17.9289 18.75 20 18.75Z"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_583_524">
                            <rect fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </Host>
        );
    }
}
