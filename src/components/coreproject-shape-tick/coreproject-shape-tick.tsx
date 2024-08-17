import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-tick',
    styleUrl: 'coreproject-shape-tick.css',
    shadow: true,
})
export class CoreprojectShapeTick {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;

    render() {
        return (
            <Host>
                <svg style={css_to_jsx(this?._style)} width={this?.width} height={this?.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" baseProfile="basic">
                    <polygon fill="currentColor" points="5.857,14.844 0.172,9.032 3.031,6.235 5.888,9.156 12.984,2.06 15.812,4.888" />
                </svg>
            </Host>
        );
    }
}
