import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreicons-shape-zap",
	shadow: true,
	styleUrl: "coreicons-shape-zap.scss"
})
export class CoreiconsShapeZap {
	@Prop() width?: string | number;
	@Prop() height?: string | number;
	@Prop() variant!: "on" | "off";

	componentWillLoad() {
		if (!["on", "off"].includes(this.variant))
			throw new Error(`'coreicons-shape-zap' (${this.variant}) not in ['on', 'off']`);
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
						height={this?.height}
						width={this?.width}
						part="svg"
						coreproject-icon-s=""
					>
						<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
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
						height={this?.height}
						width={this?.width}
						part="svg"
						coreproject-icon-s=""
					>
						<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline>
						<polyline points="18.57 12.91 21 10 15.66 10"></polyline>
						<polyline points="8 8 3 14 12 14 11 22 16 16"></polyline>
						<line x1="1" y1="1" x2="23" y2="23"></line>
					</svg>
				</Host>
			);
		}
	}
}
