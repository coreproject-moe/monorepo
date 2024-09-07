import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-check",
	shadow: true,
	styleUrl: "coreproject-shape-check.css"
})
export class CoreprojectShapeCheck {
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
					data-marker="C"
				>
					<polyline points="20 6 9 17 4 12"></polyline>
				</svg>
			</Host>
		);
	}
}
