import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-check",
	shadow: true,
	styleUrl: "coreproject-shape-check.scss"
})
export class CoreprojectShapeCheck {
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
					height={this?.height}
					width={this?.width}
					part="svg"
					coreproject-icon-C=""
				>
					<polyline points="20 6 9 17 4 12"></polyline>
				</svg>
			</Host>
		);
	}
}
