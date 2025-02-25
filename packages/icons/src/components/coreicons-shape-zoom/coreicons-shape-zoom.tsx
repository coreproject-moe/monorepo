import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'coreicons-shape-zoom',
    shadow: true,
    styleUrl: 'coreicons-shape-zoom.scss'
})
export class CoreiconsShapeZoom {
    @Prop() width?: string | number;
    @Prop() height?: string | number;
    @Prop() variant!: 'in' | 'out';

    componentWillLoad() {
        if (!['in', 'out'].includes(this.variant))
            throw new Error(
                `'coreicons-shape-zoom' (${this.variant}) not in ['in', 'out']`
            );
    }

    render() {
        if (this.variant === 'in') {
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
                        coreproject-icon-q=""
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="11" y1="8" x2="11" y2="14"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                </Host>
            );
        } else if (this.variant === 'out') {
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
                        coreproject-icon-q=""
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        <line x1="8" y1="11" x2="14" y2="11"></line>
                    </svg>
                </Host>
            );
        }
    }
}
