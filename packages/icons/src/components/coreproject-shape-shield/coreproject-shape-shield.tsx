import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-shield",
	shadow: true,
	styleUrl: "coreproject-shape-shield.scss"
})
export class CoreprojectShapeShield {
	@Prop() width: string | number = 24;
	@Prop() height: string | number = 24;
	@Prop() variant!: "on" | "off";

	componentWillLoad() {
		if (!["on", "off"].includes(this.variant))
			throw new Error(`'coreproject-shape-shield' (${this.variant}) not in ['on', 'off']`);
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
						coreproject-icon-k=""
					>
						<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
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
						coreproject-icon-k=""
					>
						<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path>
						<path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path>
						<line x1="1" y1="1" x2="23" y2="23"></line>
					</svg>
				</Host>
			);
		}
	}
}
