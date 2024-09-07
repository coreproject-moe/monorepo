import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-shrink",
	shadow: true,
	styleUrl: "coreproject-shape-shrink.css"
})
export class CoreprojectShapeShrink {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					height={this?.height}
					width={this?.width}
					part="svg"
					data-marker="0A"
				>
					<polyline points="4 14 10 14 10 20"></polyline>
					<polyline points="20 10 14 10 14 4"></polyline>
					<line x1="14" y1="10" x2="21" y2="3"></line>
					<line x1="3" y1="21" x2="10" y2="14"></line>
				</svg>
			</Host>
		);
	}
}
