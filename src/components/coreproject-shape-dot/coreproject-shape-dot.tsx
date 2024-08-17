import { Component, Host, h, Prop, Watch } from '@stencil/core';

import { css_to_jsx } from '$utils/css_to_jsx';
import { is_number } from '$utils/is_number';

@Component({
    tag: 'coreproject-shape-dot',
    styleUrl: 'coreproject-shape-dot.css',
    shadow: true,
})
export class CoreprojectShapeDot {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;

    @Watch('height')
    watchHeight(newValue: string) {
        if (!is_number(newValue)) throw new Error(`height:${this.height} is not a string or a number string`);
    }

    @Watch('width')
    watchWidth(newValue: string) {
        if (!is_number(newValue)) throw new Error(`height:${this.height} is not a string or a number string`);
    }

    render() {
        return (
            <Host>
                <svg style={css_to_jsx(this?._style)} width={this?.width} height={this?.height} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="5" fill="currentColor"></circle>
                </svg>
            </Host>
        );
    }
}
