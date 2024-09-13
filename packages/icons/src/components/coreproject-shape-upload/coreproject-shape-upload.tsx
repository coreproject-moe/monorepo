import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-upload",
	shadow: true,
	styleUrl: "coreproject-shape-upload.scss"
})
export class CoreprojectShapeUpload {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "arrow" | "cloud";

	componentWillLoad() {
		if (!["arrow", "cloud"].includes(this.variant))
			throw new Error(`'coreproject-shape-upload' (${this.variant}) not in ['arrow', 'cloud']`);
	}

	render() {
		if (this.variant === "arrow") {
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
						coreproject-icon-m=""
					>
						<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
						<polyline points="17 8 12 3 7 8"></polyline>
						<line x1="12" y1="3" x2="12" y2="15"></line>
					</svg>
				</Host>
			);
		} else if (this.variant === "cloud") {
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
						coreproject-icon-m=""
					>
						<polyline points="16 16 12 12 8 16"></polyline>
						<line x1="12" y1="12" x2="12" y2="21"></line>
						<path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
						<polyline points="16 16 12 12 8 16"></polyline>
					</svg>
				</Host>
			);
		}
	}
}
