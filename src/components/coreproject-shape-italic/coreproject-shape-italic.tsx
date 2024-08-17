import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-italic',
    styleUrl: 'coreproject-shape-italic.css',
    shadow: true,
})
export class CoreprojectShapeItalic {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;

    render() {
        return (
            <Host>
                <svg style={css_to_jsx(this?._style)} width={this?.width} height={this?.height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6h4m4 0h-4m0 0-4 12m0 0h4m-4 0H6" />
                </svg>
            </Host>
        );
    }
}
