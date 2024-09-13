import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-trending",
	shadow: true,
	styleUrl: "coreproject-shape-trending.scss"
})
export class CoreprojectShapeTrending {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "up" | "down";

	componentWillLoad() {
		if (!["up", "down"].includes(this.variant))
			throw new Error(`'coreproject-shape-trending' (${this.variant}) not in ['up', 'down']`);
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
					coreproject-style-3=""
					class={this?.variant}
				>
					<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
					<polyline points="17 6 23 6 23 12"></polyline>
				</svg>
			</Host>
		);
	}
}
