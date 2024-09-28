import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-link",
	shadow: true,
	styleUrl: "coreproject-shape-link.scss"
})
export class CoreprojectShapeLink {
	@Prop() width: string | number = 24;
	@Prop() height: string | number = 24;
	@Prop() variant!: "tilted" | "horizontal";

	componentWillLoad() {
		if (!["tilted", "horizontal"].includes(this.variant))
			throw new Error(`'coreproject-shape-link' (${this.variant}) not in ['tilted', 'horizontal']`);
	}

	render() {
		if (this.variant === "tilted") {
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
						coreproject-icon-i=""
					>
						<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
						<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
					</svg>
				</Host>
			);
		} else if (this.variant === "horizontal") {
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
						coreproject-icon-i=""
					>
						<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path>
						<line x1="8" y1="12" x2="16" y2="12"></line>
					</svg>
				</Host>
			);
		}
	}
}
