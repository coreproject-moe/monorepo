import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-mouse-pointer",
	shadow: true,
	styleUrl: "coreproject-shape-mouse-pointer.scss"
})
export class CoreprojectShapeMousePointer {
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
					coreproject-icon-0l=""
				>
					<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
					<path d="M13 13l6 6"></path>
				</svg>
			</Host>
		);
	}
}
