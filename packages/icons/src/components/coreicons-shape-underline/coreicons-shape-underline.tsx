import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'coreicons-shape-underline',
    shadow: true,
    styleUrl: 'coreicons-shape-underline.scss'
})
export class CoreiconsShapeUnderline {
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
                    coreproject-icon-0L=""
                >
                    <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path>
                    <line x1="4" y1="21" x2="20" y2="21"></line>
                </svg>
            </Host>
        );
    }
}
