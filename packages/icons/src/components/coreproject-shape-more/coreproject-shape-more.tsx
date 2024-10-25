import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-more",
	shadow: true,
	styleUrl: "coreproject-shape-more.scss"
})
export class CoreprojectShapeMore {
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
					coreproject-icon-0k=""
				>
					<circle cx="12" cy="12" r="1"></circle>
					<circle cx="12" cy="5" r="1"></circle>
					<circle cx="12" cy="19" r="1"></circle>
				</svg>
			</Host>
		);
	}
}
