import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-rotate",
	shadow: true,
	styleUrl: "coreproject-shape-rotate.scss"
})
export class CoreprojectShapeRotate {
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
					coreproject-icon-0v=""
				>
					<polyline points="23 4 23 10 17 10"></polyline>
					<path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
				</svg>
			</Host>
		);
	}
}
