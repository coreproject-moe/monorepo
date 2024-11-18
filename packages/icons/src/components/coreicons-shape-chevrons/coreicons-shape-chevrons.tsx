import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreicons-shape-chevrons",
	shadow: true,
	styleUrl: "coreicons-shape-chevrons.scss"
})
export class CoreiconsShapeChevrons {
	@Prop() width?: string | number;
	@Prop() height?: string | number;
	@Prop() variant!: "up" | "right" | "down" | "left";

	componentWillLoad() {
		if (!["up", "right", "down", "left"].includes(this.variant))
			throw new Error(
				`'coreicons-shape-chevrons' (${this.variant}) not in ['up', 'right', 'down', 'left']`
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
					coreproject-icon-1=""
					class={this?.variant}
				>
					<polyline points="17 11 12 6 7 11"></polyline>
					<polyline points="17 18 12 13 7 18"></polyline>
				</svg>
			</Host>
		);
	}
}
