import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-chevron',
    shadow: true,
    styleUrl: 'coreproject-shape-chevron.css',
})
export class CoreprojectShapeChevron {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    @Prop() variant: 'down' | 'up' | 'left' | 'right' = 'down';

    render() {
        if (this.variant === 'down') {
            return (
                <Host>
                    <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 11.25L15 18.75L22.5 11.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Host>
            );
        } else if (this.variant === 'up') {
            return (
                <Host>
                    <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.5 18.75L15 11.25L7.5 18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Host>
            );
        } else if (this.variant === 'left') {
            return (
                <Host>
                    <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.75 22.5L11.25 15L18.75 7.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Host>
            );
        } else if (this.variant === 'right') {
            return (
                <Host>
                    <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.25 22.5L18.75 15L11.25 7.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Host>
            );
        }
    }
}
