import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
	tag: "coreproject-shape-chevrons",
	shadow: true,
	styleUrl: "coreproject-shape-chevrons.css"
})
export class CoreprojectShapeChevrons {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;

    render() {
        return (
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.25 13.75L15 7.5L8.75 13.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M21.25 22.5L15 16.25L8.75 22.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Host>
        );
    }
}
