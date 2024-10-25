import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-award",
	shadow: true,
	styleUrl: "coreproject-shape-award.scss"
})
export class CoreprojectShapeAward {
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
					height={this.height}
					width={this.width}
					part="svg"
					coreproject-icon-w=""
				>
					<circle cx="12" cy="8" r="7"></circle>
					<polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
				</svg>
			</Host>
		);
	}
}
