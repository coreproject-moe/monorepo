import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreicons-shape-repeat",
	shadow: true,
	styleUrl: "coreicons-shape-repeat.scss"
})
export class CoreiconsShapeRepeat {
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
					coreproject-icon-0u=""
				>
					<polyline points="17 1 21 5 17 9"></polyline>
					<path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
					<polyline points="7 23 3 19 7 15"></polyline>
					<path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
				</svg>
			</Host>
		);
	}
}
