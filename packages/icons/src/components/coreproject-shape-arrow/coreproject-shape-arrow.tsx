import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-arrow",
	shadow: true,
	styleUrl: "coreproject-shape-arrow.scss"
})
export class CoreprojectShapeArrow {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() variant!: "up" | "right" | "down" | "left";

	componentWillLoad() {
		if (!["up", "right", "down", "left"].includes(this.variant))
			throw new Error(
				`'coreproject-shape-arrow' (${this.variant}) not in ['up', 'right', 'down', 'left']`
			);
	}

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
					coreproject-icon-6=""
					class={this?.variant}
				>
					<line x1="12" y1="19" x2="12" y2="5"></line>
					<polyline points="5 12 12 5 19 12"></polyline>
				</svg>
			</Host>
		);
	}
}
