import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'coreicons-shape-filter',
    shadow: true,
    styleUrl: 'coreicons-shape-filter.scss'
})
export class CoreiconsShapeFilter {
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
                    coreproject-icon-O=""
                >
                    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
            </Host>
        );
    }
}
