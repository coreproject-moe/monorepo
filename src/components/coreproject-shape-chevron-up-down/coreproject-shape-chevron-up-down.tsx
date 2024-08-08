import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-chevron-up-down',
    styleUrl: 'coreproject-shape-chevron-up-down.css',
    shadow: false,
})
export class CoreprojectShapeChevronUpDown {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: { [key: string]: string };
    render() {
        return (
            <Host>
                <svg width={this?.width} height={this?.height} style={this?._style} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.3999 11.25L9.1499 15L12.8999 11.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.8999 6.75L9.1499 3L5.3999 6.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Host>
        );
    }
}
