import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'coreicons-shape-thumbs',
    shadow: true,
    styleUrl: 'coreicons-shape-thumbs.scss'
})
export class CoreiconsShapeThumbs {
    @Prop() width?: string | number;
    @Prop() height?: string | number;
    @Prop() variant!: 'up' | 'down';

    componentWillLoad() {
        if (!['up', 'down'].includes(this.variant))
            throw new Error(
                `'coreicons-shape-thumbs' (${this.variant}) not in ['up', 'down']`
            );
    }

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
                    coreproject-icon-2=""
                    class={this?.variant}
                >
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                </svg>
            </Host>
        );
    }
}
