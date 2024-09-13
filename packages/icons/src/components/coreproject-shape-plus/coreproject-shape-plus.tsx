import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-plus",
	shadow: true,
	styleUrl: "coreproject-shape-plus.scss"
})
export class CoreprojectShapePlus {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "no-border" | "circle" | "square";

	componentWillLoad() {
		if (!["no-border", "circle", "square"].includes(this.variant))
			throw new Error(
				`'coreproject-shape-plus' (${this.variant}) not in ['no-border', 'circle', 'square']`
			);
	}

	render() {
		if (this.variant === "no-border") {
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
						data-svg-scope-marker-j=""
					>
						<line x1="12" y1="5" x2="12" y2="19"></line>
						<line x1="5" y1="12" x2="19" y2="12"></line>
					</svg>
				</Host>
			);
		} else if (this.variant === "circle") {
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
						data-svg-scope-marker-j=""
					>
						<circle cx="12" cy="12" r="10"></circle>
						<line x1="12" y1="8" x2="12" y2="16"></line>
						<line x1="8" y1="12" x2="16" y2="12"></line>
					</svg>
				</Host>
			);
		} else if (this.variant === "square") {
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
						data-svg-scope-marker-j=""
					>
						<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
						<line x1="12" y1="8" x2="12" y2="16"></line>
						<line x1="8" y1="12" x2="16" y2="12"></line>
					</svg>
				</Host>
			);
		}
	}
}
