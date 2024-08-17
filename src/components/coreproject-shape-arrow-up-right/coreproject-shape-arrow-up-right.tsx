import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-arrow-up-right',
    styleUrl: 'coreproject-shape-arrow-up-right.css',
    shadow: true,
})
export class CoreprojectShapeArrowUpRight {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;

    render() {
        return (
            <Host>
                <svg style={css_to_jsx(this?._style)} width={this?.width} height={this?.height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.66699 11.3333L11.3337 4.66666" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.66699 4.66666H11.3337V11.3333" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Host>
        );
    }
}
