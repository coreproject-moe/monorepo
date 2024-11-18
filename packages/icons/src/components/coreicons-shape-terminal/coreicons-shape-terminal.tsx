import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreicons-shape-terminal",
	shadow: true,
	styleUrl: "coreicons-shape-terminal.scss"
})
export class CoreiconsShapeTerminal {
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
					coreproject-icon-0H=""
				>
					<polyline points="4 17 10 11 4 5"></polyline>
					<line x1="12" y1="19" x2="20" y2="19"></line>
				</svg>
			</Host>
		);
	}
}
