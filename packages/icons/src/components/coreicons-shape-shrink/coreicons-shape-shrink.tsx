import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'coreicons-shape-shrink',
    shadow: true,
    styleUrl: 'coreicons-shape-shrink.scss'
})
export class CoreiconsShapeShrink {
    @Prop() width?: string | number;
    @Prop() height?: string | number;

    render() {
        return (
            <Host>
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height={this?.height}
                    width={this?.width}
                    part="svg"
                    coreproject-icon-0z=""
                >
                    <polyline points="4 14 10 14 10 20"></polyline>
                    <polyline points="20 10 14 10 14 4"></polyline>
                    <line x1="14" y1="10" x2="21" y2="3"></line>
                    <line x1="3" y1="21" x2="10" y2="14"></line>
                </svg>
            </Host>
        );
    }
}
