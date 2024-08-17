import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-expand',
    styleUrl: 'coreproject-shape-expand.css',
    shadow: true,
})
export class CoreprojectShapeExpand {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;

    render() {
        return (
            <Host>
                <svg style={css_to_jsx(this?._style)} width={this?.width} height={this?.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="m18 9l-6-6l-6 6h12Zm0 6l-6 6l-6-6h12Z" />
                </svg>
            </Host>
        );
    }
}
