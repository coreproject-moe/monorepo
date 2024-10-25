import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-hash",
	shadow: true,
	styleUrl: "coreproject-shape-hash.scss"
})
export class CoreprojectShapeHash {
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
					coreproject-icon-X=""
				>
					<line x1="4" y1="9" x2="20" y2="9"></line>
					<line x1="4" y1="15" x2="20" y2="15"></line>
					<line x1="10" y1="3" x2="8" y2="21"></line>
					<line x1="16" y1="3" x2="14" y2="21"></line>
				</svg>
			</Host>
		);
	}
}
