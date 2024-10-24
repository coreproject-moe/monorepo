import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-info",
	shadow: true,
	styleUrl: "coreproject-shape-info.scss"
})
export class CoreprojectShapeInfo {
	@Prop() width: string | number;
	@Prop() height: string | number;

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
					coreproject-icon-02=""
				>
					<circle cx="12" cy="12" r="10"></circle>
					<line x1="12" y1="16" x2="12" y2="12"></line>
					<line x1="12" y1="8" x2="12.01" y2="8"></line>
				</svg>
			</Host>
		);
	}
}
