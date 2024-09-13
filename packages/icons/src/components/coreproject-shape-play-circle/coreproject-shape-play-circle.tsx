import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-play-circle",
	shadow: true,
	styleUrl: "coreproject-shape-play-circle.scss"
})
export class CoreprojectShapePlayCircle {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

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
					coreproject-style-0p=""
				>
					<circle cx="12" cy="12" r="10"></circle>
					<polygon points="10 8 16 12 10 16 10 8"></polygon>
				</svg>
			</Host>
		);
	}
}
