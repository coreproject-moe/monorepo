import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-code',
    styleUrl: 'coreproject-shape-code.css',
    shadow: true,
})
export class CoreprojectShapeCode {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;

    render() {
        return (
            <Host>
                <svg style={css_to_jsx(this?._style)} width={this?.width} height={this?.height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 8L3 12L8 16M16 16L21 12L16 8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Host>
        );
    }
}
