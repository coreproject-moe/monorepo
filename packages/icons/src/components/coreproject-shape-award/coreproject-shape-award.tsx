import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-award",
	shadow: true,
	styleUrl: "coreproject-shape-award.css"
})
export class CoreprojectShapeAward {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					height={this?.height}
					width={this?.width}
					part="svg"
					data-marker="w"
				>
					<circle cx="12" cy="8" r="7"></circle>
					<polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
				</svg>
			</Host>
		);
	}
}
