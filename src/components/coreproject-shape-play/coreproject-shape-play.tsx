import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-play',
    shadow: true,
    styleUrl: 'coreproject-shape-play.css',
})
export class CoreprojectShapePlay {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;

    render() {
        return (
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.25 3.75L23.75 15L6.25 26.25V3.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Host>
        );
    }
}
