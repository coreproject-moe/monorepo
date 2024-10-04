import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-bar-chart",
	shadow: true,
	styleUrl: "coreproject-shape-bar-chart.scss"
})
export class CoreprojectShapeBarChart {
	@Prop() width: string | number = 24;
	@Prop() height: string | number = 24;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					height={this.height}
					width={this.width}
					part="svg"
					coreproject-icon-x=""
				>
					<line x1="12" y1="20" x2="12" y2="10"></line>
					<line x1="18" y1="20" x2="18" y2="4"></line>
					<line x1="6" y1="20" x2="6" y2="16"></line>
				</svg>
			</Host>
		);
	}
}
