import { Component, Host, h, Prop, Watch } from '@stencil/core';

import { css_to_jsx } from '$utils/css_to_jsx';
import { is_number } from '$utils/is_number';

@Component({
    tag: 'coreproject-shape-menu',
    styleUrl: 'coreproject-shape-menu.css',
    shadow: true,
})
export class CoreprojectShapeMenu {
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
                <svg style={css_to_jsx(this?._style)} width={this?.width} height={this?.height} fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 6 9 A 2.0002 2.0002 0 1 0 6 13 L 42 13 A 2.0002 2.0002 0 1 0 42 9 L 6 9 z M 6 22 A 2.0002 2.0002 0 1 0 6 26 L 42 26 A 2.0002 2.0002 0 1 0 42 22 L 6 22 z M 6 35 A 2.0002 2.0002 0 1 0 6 39 L 42 39 A 2.0002 2.0002 0 1 0 42 35 L 6 35 z" />
                </svg>
            </Host>
        );
    }
}
