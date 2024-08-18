import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-chevrons',
    shadow: true,
    styleUrl: 'coreproject-shape-chevrons.css',
})
export class CoreprojectShapeChevrons {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    @Prop() variant: 'down' | 'up' | 'left' | 'right' = 'down';

    render() {
        if (this.variant === 'down') {
            return (
                <Host>
                    <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.75 16.25L15 22.5L21.25 16.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.75 7.5L15 13.75L21.25 7.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Host>
            );
        } else if (this.variant === 'up') {
            return (
                <Host>
                    <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.25 13.75L15 7.5L8.75 13.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.25 22.5L15 16.25L8.75 22.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Host>
            );
        } else if (this.variant === 'left') {
            return (
                <Host>
                    <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.75 21.25L7.5 15L13.75 8.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M22.5 21.25L16.25 15L22.5 8.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Host>
            );
        } else if (this.variant === 'right') {
            return (
                <Host>
                    <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.25 21.25L22.5 15L16.25 8.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.5 21.25L13.75 15L7.5 8.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Host>
            );
        }
    }
}
