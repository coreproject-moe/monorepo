import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-more-box',
    styleUrl: 'coreproject-shape-more-box.css',
    shadow: true,
})
export class CoreprojectShapeMoreBox {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;

    render() {
        return (
            <Host>
                <svg style={css_to_jsx(this?._style)} width={this?.width} height={this?.height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="8" height="8" rx="2" fill="currentColor" />
                    <rect x="12" width="8" height="8" rx="2" fill="currentColor" />
                    <rect x="12" y="12" width="8" height="8" rx="2" fill="currentColor" />
                    <rect y="12" width="8" height="8" rx="2" fill="currentColor" />
                </svg>
            </Host>
        );
    }
}
