import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
	tag: "coreproject-shape-grid",
	shadow: true,
	styleUrl: "coreproject-shape-grid.css"
})
export class CoreprojectShapeGrid {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;

    render() {
        return (
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5 3.75H3.75V12.5H12.5V3.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M26.25 3.75H17.5V12.5H26.25V3.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M26.25 17.5H17.5V26.25H26.25V17.5Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.5 17.5H3.75V26.25H12.5V17.5Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Host>
        );
    }
}
