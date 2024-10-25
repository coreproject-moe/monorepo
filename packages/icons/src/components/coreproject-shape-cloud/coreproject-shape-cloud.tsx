import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-cloud",
	shadow: true,
	styleUrl: "coreproject-shape-cloud.scss"
})
export class CoreprojectShapeCloud {
	@Prop() width: string | number = 24;
	@Prop() height: string | number = 24;
	@Prop() variant!: "on" | "off";

	componentWillLoad() {
		if (!["on", "off"].includes(this.variant))
			throw new Error(`'coreproject-shape-cloud' (${this.variant}) not in ['on', 'off']`);
	}

	render() {
		if (this.variant === "on") {
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
						coreproject-icon-c=""
					>
						<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
					</svg>
				</Host>
			);
		} else if (this.variant === "off") {
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
						coreproject-icon-c=""
					>
						<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path>
						<line x1="1" y1="1" x2="23" y2="23"></line>
					</svg>
				</Host>
			);
		}
	}
}
