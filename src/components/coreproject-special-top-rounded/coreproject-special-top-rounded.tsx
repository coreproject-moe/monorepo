import { Component, Host, h, Prop } from '@stencil/core';

@Component({
    tag: 'coreproject-special-top-rounded',
    styleUrl: 'coreproject-special-top-rounded.css',
    shadow: true,
})
export class CoreprojectSpecialTopRounded {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: { [key: string]: string };
    render() {
        return (
            <Host>
                <svg width={this?.width} height={this?.height} style={this?._style} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24 0H0V24C0 10.7451 10.7461 0 24 0Z" fill="currentColor" />
                </svg>
            </Host>
        );
    }
}
