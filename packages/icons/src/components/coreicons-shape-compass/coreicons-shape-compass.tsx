import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreicons-shape-compass",
	shadow: true,
	styleUrl: "coreicons-shape-compass.scss"
})
export class CoreiconsShapeCompass {
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
					coreproject-icon-G=""
				>
					<circle cx="12" cy="12" r="10"></circle>
					<polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
				</svg>
			</Host>
		);
	}
}
