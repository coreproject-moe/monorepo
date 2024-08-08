import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-chevron',
    styleUrl: 'coreproject-shape-chevron.css',
    shadow: true,
})
export class CoreprojectShapeChevron {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: { [key: string]: string };
    render() {
        return (
            <Host>
                <svg width={this.width} height={this.height} style={this._style} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.5" d="M6 9L12 15L18 9" />
                </svg>
            </Host>
        );
    }
}
