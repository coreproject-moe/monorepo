import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-maximize",
	shadow: true,
	styleUrl: "coreproject-shape-maximize.scss"
})
export class CoreprojectShapeMaximize {
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
					coreproject-icon-0c=""
				>
					<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
				</svg>
			</Host>
		);
	}
}
