import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-cast",
	shadow: true,
	styleUrl: "coreproject-shape-cast.scss"
})
export class CoreprojectShapeCast {
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
					coreproject-icon-B=""
				>
					<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
					<line x1="2" y1="20" x2="2.01" y2="20"></line>
				</svg>
			</Host>
		);
	}
}
