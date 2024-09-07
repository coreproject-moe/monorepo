import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-toggle",
	shadow: true,
	styleUrl: "coreproject-shape-toggle.css"
})
export class CoreprojectShapeToggle {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "off" | "on";

	componentWillLoad() {
		if (!["off", "on"].includes(this.variant))
			throw new Error(`'coreproject-shape-toggle' (${this.variant}) not in ['off', 'on']`);
	}

	render() {
		return (
			<Host>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					height={this?.height}
					width={this?.width}
					part="svg"
					data-marker="5"
					class={this?.variant}
				>
					<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect>
					<circle cx="8" cy="12" r="3"></circle>
				</svg>
			</Host>
		);
	}
}
