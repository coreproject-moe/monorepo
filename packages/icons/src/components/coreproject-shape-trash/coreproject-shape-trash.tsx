import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-trash",
	shadow: true,
	styleUrl: "coreproject-shape-trash.scss"
})
export class CoreprojectShapeTrash {
	@Prop() width: string | number = 24;
	@Prop() height: string | number = 24;
	@Prop() variant!: "with-lines" | "without-lines";

	componentWillLoad() {
		if (!["with-lines", "without-lines"].includes(this.variant))
			throw new Error(
				`'coreproject-shape-trash' (${this.variant}) not in ['with-lines', 'without-lines']`
			);
	}

	render() {
		if (this.variant === "with-lines") {
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
						coreproject-icon-l=""
					>
						<polyline points="3 6 5 6 21 6"></polyline>
						<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
						<line x1="10" y1="11" x2="10" y2="17"></line>
						<line x1="14" y1="11" x2="14" y2="17"></line>
					</svg>
				</Host>
			);
		} else if (this.variant === "without-lines") {
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
						coreproject-icon-l=""
					>
						<polyline points="3 6 5 6 21 6"></polyline>
						<path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
					</svg>
				</Host>
			);
		}
	}
}
