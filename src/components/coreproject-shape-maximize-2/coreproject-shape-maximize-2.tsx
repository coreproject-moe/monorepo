import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-maximize-2',
    shadow: true,
    styleUrl: 'coreproject-shape-maximize-2.css',
})
export class CoreprojectShapeMaximize2 {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;

    render() {
        return (
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.75 3.75H26.25V11.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.25 26.25H3.75V18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M26.25 3.75L17.5 12.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3.75 26.25L12.5 17.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Host>
        );
    }
}
