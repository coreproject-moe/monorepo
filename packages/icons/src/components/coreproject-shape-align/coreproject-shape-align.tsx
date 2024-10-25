import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-align",
	shadow: true,
	styleUrl: "coreproject-shape-align.scss"
})
export class CoreprojectShapeAlign {
	@Prop() width: string | number = 24;
	@Prop() height: string | number = 24;
	@Prop() variant!: "center" | "justify" | "left" | "right";

	componentWillLoad() {
		if (!["center", "justify", "left", "right"].includes(this.variant))
			throw new Error(
				`'coreproject-shape-align' (${this.variant}) not in ['center', 'justify', 'left', 'right']`
			);
	}

	render() {
		if (this.variant === "center") {
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
						coreproject-icon-9=""
					>
						<line x1="18" y1="10" x2="6" y2="10"></line>
						<line x1="21" y1="6" x2="3" y2="6"></line>
						<line x1="21" y1="14" x2="3" y2="14"></line>
						<line x1="18" y1="18" x2="6" y2="18"></line>
					</svg>
				</Host>
			);
		} else if (this.variant === "justify") {
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
						coreproject-icon-9=""
					>
						<line x1="21" y1="10" x2="3" y2="10"></line>
						<line x1="21" y1="6" x2="3" y2="6"></line>
						<line x1="21" y1="14" x2="3" y2="14"></line>
						<line x1="21" y1="18" x2="3" y2="18"></line>
					</svg>
				</Host>
			);
		} else if (this.variant === "left") {
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
						coreproject-icon-9=""
					>
						<line x1="17" y1="10" x2="3" y2="10"></line>
						<line x1="21" y1="6" x2="3" y2="6"></line>
						<line x1="21" y1="14" x2="3" y2="14"></line>
						<line x1="17" y1="18" x2="3" y2="18"></line>
					</svg>
				</Host>
			);
		} else if (this.variant === "right") {
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
						coreproject-icon-9=""
					>
						<line x1="21" y1="10" x2="7" y2="10"></line>
						<line x1="21" y1="6" x2="3" y2="6"></line>
						<line x1="21" y1="14" x2="3" y2="14"></line>
						<line x1="21" y1="18" x2="7" y2="18"></line>
					</svg>
				</Host>
			);
		}
	}
}
