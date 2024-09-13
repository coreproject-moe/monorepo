import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-italic",
	shadow: true,
	styleUrl: "coreproject-shape-italic.scss"
})
export class CoreprojectShapeItalic {
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
					coreproject-style-03=""
				>
					<line x1="19" y1="4" x2="10" y2="4"></line>
					<line x1="14" y1="20" x2="5" y2="20"></line>
					<line x1="15" y1="4" x2="9" y2="20"></line>
				</svg>
			</Host>
		);
	}
}
