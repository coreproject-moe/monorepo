import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-bold",
	shadow: true,
	styleUrl: "coreproject-shape-bold.scss"
})
export class CoreprojectShapeBold {
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
					coreproject-icon-y=""
				>
					<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
					<path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>
				</svg>
			</Host>
		);
	}
}
