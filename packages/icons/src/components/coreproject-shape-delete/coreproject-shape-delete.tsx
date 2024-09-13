import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-delete",
	shadow: true,
	styleUrl: "coreproject-shape-delete.scss"
})
export class CoreprojectShapeDelete {
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
					coreproject-style-I=""
				>
					<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path>
					<line x1="18" y1="9" x2="12" y2="15"></line>
					<line x1="12" y1="9" x2="18" y2="15"></line>
				</svg>
			</Host>
		);
	}
}
