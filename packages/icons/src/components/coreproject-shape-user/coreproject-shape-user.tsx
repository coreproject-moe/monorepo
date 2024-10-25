import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-user",
	shadow: true,
	styleUrl: "coreproject-shape-user.scss"
})
export class CoreprojectShapeUser {
	@Prop() width: string | number = 24;
	@Prop() height: string | number = 24;
	@Prop() variant!: "normal" | "check" | "minus" | "plus" | "x";

	componentWillLoad() {
		if (!["normal", "check", "minus", "plus", "x"].includes(this.variant))
			throw new Error(
				`'coreproject-shape-user' (${this.variant}) not in ['normal', 'check', 'minus', 'plus', 'x']`
			);
	}

	render() {
		if (this.variant === "normal") {
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
						coreproject-icon-n=""
					>
						<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
						<circle cx="12" cy="7" r="4"></circle>
					</svg>
				</Host>
			);
		} else if (this.variant === "check") {
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
						coreproject-icon-n=""
					>
						<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
						<circle cx="8.5" cy="7" r="4"></circle>
						<polyline points="17 11 19 13 23 9"></polyline>
					</svg>
				</Host>
			);
		} else if (this.variant === "minus") {
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
						coreproject-icon-n=""
					>
						<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
						<circle cx="8.5" cy="7" r="4"></circle>
						<line x1="23" y1="11" x2="17" y2="11"></line>
					</svg>
				</Host>
			);
		} else if (this.variant === "plus") {
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
						coreproject-icon-n=""
					>
						<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
						<circle cx="8.5" cy="7" r="4"></circle>
						<line x1="20" y1="8" x2="20" y2="14"></line>
						<line x1="23" y1="11" x2="17" y2="11"></line>
					</svg>
				</Host>
			);
		} else if (this.variant === "x") {
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
						coreproject-icon-n=""
					>
						<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
						<circle cx="8.5" cy="7" r="4"></circle>
						<line x1="18" y1="8" x2="23" y2="13"></line>
						<line x1="23" y1="8" x2="18" y2="13"></line>
					</svg>
				</Host>
			);
		}
	}
}
