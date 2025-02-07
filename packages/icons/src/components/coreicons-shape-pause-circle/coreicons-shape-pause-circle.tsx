import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'coreicons-shape-pause-circle',
    shadow: true,
    styleUrl: 'coreicons-shape-pause-circle.scss'
})
export class CoreiconsShapePauseCircle {
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
                    coreproject-icon-0m=""
                >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="10" y1="15" x2="10" y2="9"></line>
                    <line x1="14" y1="15" x2="14" y2="9"></line>
                </svg>
            </Host>
        );
    }
}
