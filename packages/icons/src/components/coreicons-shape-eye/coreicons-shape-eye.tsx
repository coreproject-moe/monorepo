import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'coreicons-shape-eye',
    shadow: true,
    styleUrl: 'coreicons-shape-eye.scss'
})
export class CoreiconsShapeEye {
    @Prop() width?: string | number;
    @Prop() height?: string | number;
    @Prop() variant!: 'open' | 'close';

    componentWillLoad() {
        if (!['open', 'close'].includes(this.variant))
            throw new Error(
                `'coreicons-shape-eye' (${this.variant}) not in ['open', 'close']`
            );
    }

    render() {
        if (this.variant === 'open') {
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
                        coreproject-icon-f=""
                    >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                </Host>
            );
        } else if (this.variant === 'close') {
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
                        coreproject-icon-f=""
                    >
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                </Host>
            );
        }
    }
}
