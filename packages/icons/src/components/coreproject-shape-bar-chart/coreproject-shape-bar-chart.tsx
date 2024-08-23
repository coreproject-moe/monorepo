import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
	tag: "coreproject-shape-bar-chart",
	shadow: true,
	styleUrl: "coreproject-shape-bar-chart.css"
})
export class CoreprojectShapeBarChart {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;

    render() {
        return (
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 25V12.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22.5 25V5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.5 25V20" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Host>
        );
    }
}
