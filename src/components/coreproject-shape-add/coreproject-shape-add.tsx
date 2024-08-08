import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-add',
    styleUrl: 'coreproject-shape-add.css',
    shadow: true,
})
export class CoreprojectShapeAdd {
    @Prop() variant: 'outline' | 'fill';
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: { [key: string]: string };

    render() {
        return (
            <Host>
                <svg width={this.width} height={this.height} style={this._style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12">
                    <path fill="currentColor" d="M6.5 1.75a.75.75 0 0 0-1.5 0V5H1.75a.75.75 0 0 0 0 1.5H5v3.25a.75.75 0 0 0 1.5 0V6.5h3.25a.75.75 0 0 0 0-1.5H6.5V1.75Z" />
                </svg>
            </Host>
        );
    }
}
