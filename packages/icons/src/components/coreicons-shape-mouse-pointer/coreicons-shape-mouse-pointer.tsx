import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'coreicons-shape-mouse-pointer',
    shadow: true,
    styleUrl: 'coreicons-shape-mouse-pointer.scss'
})
export class CoreiconsShapeMousePointer {
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
                    coreproject-icon-0k=""
                >
                    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
                    <path d="M13 13l6 6"></path>
                </svg>
            </Host>
        );
    }
}
