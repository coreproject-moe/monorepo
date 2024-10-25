import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-chevron",
	shadow: true,
	styleUrl: "coreproject-shape-chevron.scss"
})
export class CoreprojectShapeChevron {
	@Prop() width: string | number = 24;
	@Prop() height: string | number = 24;
	@Prop() variant!: "up" | "right" | "down" | "left";

	componentWillLoad() {
		if (!["up", "right", "down", "left"].includes(this.variant))
			throw new Error(
				`'coreproject-shape-chevron' (${this.variant}) not in ['up', 'right', 'down', 'left']`
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
					height={this.height}
					width={this.width}
					part="svg"
					coreproject-icon-0=""
					class={this?.variant}
				>
					<polyline points="18 15 12 9 6 15"></polyline>
				</svg>
			</Host>
		);
	}
}
