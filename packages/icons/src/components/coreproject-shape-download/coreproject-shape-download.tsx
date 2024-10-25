import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-download",
	shadow: true,
	styleUrl: "coreproject-shape-download.scss"
})
export class CoreprojectShapeDownload {
	@Prop() width: string | number = 24;
	@Prop() height: string | number = 24;
	@Prop() variant!: "arrow" | "cloud";

	componentWillLoad() {
		if (!["arrow", "cloud"].includes(this.variant))
			throw new Error(`'coreproject-shape-download' (${this.variant}) not in ['arrow', 'cloud']`);
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
						height={this.height}
						width={this.width}
						part="svg"
						coreproject-icon-d=""
					>
						<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
						<polyline points="7 10 12 15 17 10"></polyline>
						<line x1="12" y1="15" x2="12" y2="3"></line>
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
						height={this.height}
						width={this.width}
						part="svg"
						coreproject-icon-d=""
					>
						<polyline points="8 17 12 21 16 17"></polyline>
						<line x1="12" y1="12" x2="12" y2="21"></line>
						<path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>
					</svg>
				</Host>
			);
		}
	}
}
