import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'coreicons-shape-speaker',
    shadow: true,
    styleUrl: 'coreicons-shape-speaker.scss'
})
export class CoreiconsShapeSpeaker {
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
                    coreproject-icon-0C=""
                >
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                    <circle cx="12" cy="14" r="4"></circle>
                    <line x1="12" y1="6" x2="12.01" y2="6"></line>
                </svg>
            </Host>
        );
    }
}
