import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-at-sign",
	shadow: true,
	styleUrl: "coreproject-shape-at-sign.scss"
})
export class CoreprojectShapeAtSign {
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
					coreproject-icon-v=""
				>
					<circle cx="12" cy="12" r="4"></circle>
					<path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
				</svg>
			</Host>
		);
	}
}
