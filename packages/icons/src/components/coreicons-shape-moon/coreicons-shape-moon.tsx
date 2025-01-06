import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'coreicons-shape-moon',
    shadow: true,
    styleUrl: 'coreicons-shape-moon.scss'
})
export class CoreiconsShapeMoon {
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
                    coreproject-icon-0j=""
                >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
            </Host>
        );
    }
}
