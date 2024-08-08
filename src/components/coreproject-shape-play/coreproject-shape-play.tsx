import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-play',
    styleUrl: 'coreproject-shape-play.css',
    shadow: false,
})
export class CoreprojectShapePlay {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: { [key: string]: string };
    render() {
        return (
            <Host>
                <svg width={this?.width} height={this?.height} style={this?._style} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.16675 2.5L15.8334 10L4.16675 17.5V2.5Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Host>
        );
    }
}
