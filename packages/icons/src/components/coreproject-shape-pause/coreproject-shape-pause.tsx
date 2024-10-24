import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-pause",
	shadow: true,
	styleUrl: "coreproject-shape-pause.scss"
})
export class CoreprojectShapePause {
	@Prop() width?: string | number;
	@Prop() height?: string | number;

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
					coreproject-icon-0o=""
				>
					<rect x="6" y="4" width="4" height="16"></rect>
					<rect x="14" y="4" width="4" height="16"></rect>
				</svg>
			</Host>
		);
	}
}
