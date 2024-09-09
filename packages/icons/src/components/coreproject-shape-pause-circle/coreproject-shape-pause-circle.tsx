import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-pause-circle",
	shadow: true,
	styleUrl: "coreproject-shape-pause-circle.css"
})
export class CoreprojectShapePauseCircle {
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
					data-marker="0o"
				>
					<circle cx="12" cy="12" r="10"></circle>
					<line x1="10" y1="15" x2="10" y2="9"></line>
					<line x1="14" y1="15" x2="14" y2="9"></line>
				</svg>
			</Host>
		);
	}
}
