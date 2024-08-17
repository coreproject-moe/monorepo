import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-corner-down-left',
    shadow: true,
    styleUrl: 'coreproject-shape-corner-down-left.css',
})
export class CoreprojectShapeCornerDownLeft {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;

    render() {
        return (
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.25 12.5L5 18.75L11.25 25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M25 5V13.75C25 15.0761 24.4732 16.3479 23.5355 17.2855C22.5979 18.2232 21.3261 18.75 20 18.75H5"
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
