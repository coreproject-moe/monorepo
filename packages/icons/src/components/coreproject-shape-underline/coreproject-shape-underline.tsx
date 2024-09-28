import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-underline",
	shadow: true,
	styleUrl: "coreproject-shape-underline.scss"
})
export class CoreprojectShapeUnderline {
	@Prop() width: string | number = 24;
	@Prop() height: string | number = 24;
	null;

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
					coreproject-icon-0M=""
				>
					<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path>
					<line x1="4" y1="21" x2="20" y2="21"></line>
				</svg>
			</Host>
		);
	}
}
