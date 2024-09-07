import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-filter",
	shadow: true,
	styleUrl: "coreproject-shape-filter.css"
})
export class CoreprojectShapeFilter {
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
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					height={this?.height}
					width={this?.width}
					part="svg"
					data-marker="O"
				>
					<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
				</svg>
			</Host>
		);
	}
}
