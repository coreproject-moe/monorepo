import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-smartphone",
	shadow: true,
	styleUrl: "coreproject-shape-smartphone.scss"
})
export class CoreprojectShapeSmartphone {
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
					coreproject-icon-0B=""
				>
					<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
					<line x1="12" y1="18" x2="12.01" y2="18"></line>
				</svg>
			</Host>
		);
	}
}
