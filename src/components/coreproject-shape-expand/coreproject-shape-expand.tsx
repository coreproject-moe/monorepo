import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-expand',
    styleUrl: 'coreproject-shape-expand.css',
    shadow: true,
})
export class CoreprojectShapeExpand {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: { [key: string]: string };
    render() {
        return (
            <Host>
                <svg width={this?.width} height={this?.height} style={this?._style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path fill="currentColor" d="m18 9l-6-6l-6 6h12Zm0 6l-6 6l-6-6h12Z" />
                </svg>
            </Host>
        );
    }
}
