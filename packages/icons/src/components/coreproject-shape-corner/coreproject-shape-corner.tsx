import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-corner",
	shadow: true,
	styleUrl: "coreproject-shape-corner.scss"
})
export class CoreprojectShapeCorner {
	@Prop() width: string | number = 24;
	@Prop() height: string | number = 24;
	@Prop() variant!:
		| "down-right"
		| "down-left"
		| "left-down"
		| "left-up"
		| "up-left"
		| "up-right"
		| "right-up"
		| "right-down";

	componentWillLoad() {
		if (
			![
				"down-right",
				"down-left",
				"left-down",
				"left-up",
				"up-left",
				"up-right",
				"right-up",
				"right-down"
			].includes(this.variant)
		)
			throw new Error(
				`'coreproject-shape-corner' (${this.variant}) not in ['down-right', 'down-left', 'left-down', 'left-up', 'up-left', 'up-right', 'right-up', 'right-down']`
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
					coreproject-icon-4=""
					class={this?.variant}
				>
					<polyline points="15 10 20 15 15 20"></polyline>
					<path d="M4 4v7a4 4 0 0 0 4 4h12"></path>
				</svg>
			</Host>
		);
	}
}
