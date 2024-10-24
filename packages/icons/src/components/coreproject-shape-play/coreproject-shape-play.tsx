import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-play",
	shadow: true,
	styleUrl: "coreproject-shape-play.scss"
})
export class CoreprojectShapePlay {
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
					coreproject-icon-0q=""
				>
					<polygon points="5 3 19 12 5 21 5 3"></polygon>
				</svg>
			</Host>
		);
	}
}
