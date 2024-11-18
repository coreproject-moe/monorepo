import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreicons-shape-minus",
	shadow: true,
	styleUrl: "coreicons-shape-minus.scss"
})
export class CoreiconsShapeMinus {
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
					coreproject-icon-0h=""
				>
					<line x1="5" y1="12" x2="19" y2="12"></line>
				</svg>
			</Host>
		);
	}
}
