import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-volume-2',
    shadow: true,
    styleUrl: 'coreproject-shape-volume-2.css',
})
export class CoreprojectShapeVolume2 {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;

    render() {
        return (
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.75 6.25L7.5 11.25H2.5V18.75H7.5L13.75 23.75V6.25Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M23.8373 6.1626C26.1807 8.50669 27.4971 11.6855 27.4971 15.0001C27.4971 18.3146 26.1807 21.4935 23.8373 23.8376M19.4248 10.5751C20.5965 11.7471 21.2547 13.3366 21.2547 14.9938C21.2547 16.6511 20.5965 18.2406 19.4248 19.4126"
                        stroke="white"
                        stroke-
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </Host>
        );
    }
}
