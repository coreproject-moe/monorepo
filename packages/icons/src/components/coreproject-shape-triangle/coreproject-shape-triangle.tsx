import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-triangle",
	shadow: true,
	styleUrl: "coreproject-shape-triangle.scss"
})
export class CoreprojectShapeTriangle {
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
					coreproject-icon-0J=""
				>
					<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
				</svg>
			</Host>
		);
	}
}
