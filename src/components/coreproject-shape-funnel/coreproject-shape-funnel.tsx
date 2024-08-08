import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-funnel',
    styleUrl: 'coreproject-shape-funnel.css',
    shadow: true,
})
export class CoreprojectShapeFunnel {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: { [key: string]: string };
    render() {
        return (
            <Host>
                <svg width={this?.width} height={this?.height} style={this?._style} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 2.25H1.5L7.5 9.345V14.25L10.5 15.75V9.345L16.5 2.25Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Host>
        );
    }
}
