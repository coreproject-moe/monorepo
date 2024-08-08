import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-dot',
    styleUrl: 'coreproject-shape-dot.css',
    shadow: true,
})
export class CoreprojectShapeDot {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: { [key: string]: string };
    render() {
        return (
            <Host>
                <svg width={this?.width} height={this?.height} style={this?._style} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5" cy="5" r="5" fill="currentColor"></circle>
                </svg>
            </Host>
        );
    }
}
