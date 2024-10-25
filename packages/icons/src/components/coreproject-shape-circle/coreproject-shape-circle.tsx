import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-circle",
	shadow: true,
	styleUrl: "coreproject-shape-circle.scss"
})
export class CoreprojectShapeCircle {
	@Prop() width: string | number = 24;
	@Prop() height: string | number = 24;
	@Prop() variant!: "outline" | "filled";

	componentWillLoad() {
		if (!["outline", "filled"].includes(this.variant))
			throw new Error(`'coreproject-shape-circle' (${this.variant}) not in ['outline', 'filled']`);
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
					coreproject-icon-8=""
					class={this?.variant}
				>
					<circle cx="12" cy="12" r="10"></circle>
				</svg>
			</Host>
		);
	}
}
