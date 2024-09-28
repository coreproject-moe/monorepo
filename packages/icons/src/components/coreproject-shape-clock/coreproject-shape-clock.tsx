import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-clock",
	shadow: true,
	styleUrl: "coreproject-shape-clock.scss"
})
export class CoreprojectShapeClock {
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
					coreproject-icon-E=""
				>
					<circle cx="12" cy="12" r="10"></circle>
					<polyline points="12 6 12 12 16 14"></polyline>
				</svg>
			</Host>
		);
	}
}
