import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-help-circle",
	shadow: true,
	styleUrl: "coreproject-shape-help-circle.scss"
})
export class CoreprojectShapeHelpCircle {
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
					coreproject-icon-00=""
				>
					<circle cx="12" cy="12" r="10"></circle>
					<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
					<line x1="12" y1="17" x2="12.01" y2="17"></line>
				</svg>
			</Host>
		);
	}
}
