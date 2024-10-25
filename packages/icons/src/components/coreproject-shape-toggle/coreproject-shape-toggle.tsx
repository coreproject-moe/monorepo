import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-toggle",
	shadow: true,
	styleUrl: "coreproject-shape-toggle.scss"
})
export class CoreprojectShapeToggle {
	@Prop() width: string | number = 24;
	@Prop() height: string | number = 24;
	@Prop() variant!: "off" | "on";

	componentWillLoad() {
		if (!["off", "on"].includes(this.variant))
			throw new Error(`'coreproject-shape-toggle' (${this.variant}) not in ['off', 'on']`);
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
					coreproject-icon-5=""
					class={this?.variant}
				>
					<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect>
					<circle cx="8" cy="12" r="3"></circle>
				</svg>
			</Host>
		);
	}
}
