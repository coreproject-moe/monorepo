import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-code",
	shadow: true,
	styleUrl: "coreproject-shape-code.scss"
})
export class CoreprojectShapeCode {
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
					coreproject-icon-F=""
				>
					<polyline points="16 18 22 12 16 6"></polyline>
					<polyline points="8 6 2 12 8 18"></polyline>
				</svg>
			</Host>
		);
	}
}
