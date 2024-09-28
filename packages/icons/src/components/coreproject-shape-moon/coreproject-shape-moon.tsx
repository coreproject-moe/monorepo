import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-moon",
	shadow: true,
	styleUrl: "coreproject-shape-moon.scss"
})
export class CoreprojectShapeMoon {
	@Prop() width: string | number = 24;
	@Prop() height: string | number = 24;
	null;

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
					coreproject-icon-0j=""
				>
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
				</svg>
			</Host>
		);
	}
}
