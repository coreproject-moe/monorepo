import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-type",
	shadow: true,
	styleUrl: "coreproject-shape-type.scss"
})
export class CoreprojectShapeType {
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
					coreproject-icon-0L=""
				>
					<polyline points="4 7 4 4 20 4 20 7"></polyline>
					<line x1="9" y1="20" x2="15" y2="20"></line>
					<line x1="12" y1="4" x2="12" y2="20"></line>
				</svg>
			</Host>
		);
	}
}
