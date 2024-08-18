import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-corner-right-down',
    shadow: true,
    styleUrl: 'coreproject-shape-corner-right-down.css',
})
export class CoreprojectShapeCornerRightDown {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;

    render() {
        return (
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 18.75L18.75 25L25 18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M5 5H13.75C15.0761 5 16.3479 5.52678 17.2855 6.46447C18.2232 7.40215 18.75 8.67392 18.75 10V25"
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
