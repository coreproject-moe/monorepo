import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-move",
	shadow: true,
	styleUrl: "coreproject-shape-move.scss"
})
export class CoreprojectShapeMove {
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
					coreproject-style-0m=""
				>
					<polyline points="5 9 2 12 5 15"></polyline>
					<polyline points="9 5 12 2 15 5"></polyline>
					<polyline points="15 19 12 22 9 19"></polyline>
					<polyline points="19 9 22 12 19 15"></polyline>
					<line x1="2" y1="12" x2="22" y2="12"></line>
					<line x1="12" y1="2" x2="12" y2="22"></line>
				</svg>
			</Host>
		);
	}
}
