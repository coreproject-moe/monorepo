import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-file",
	shadow: true,
	styleUrl: "coreproject-shape-file.scss"
})
export class CoreprojectShapeFile {
	@Prop() width: string | number = 24;
	@Prop() height: string | number = 24;
	@Prop() variant!: "normal" | "minus" | "plus" | "text";

	componentWillLoad() {
		if (!["normal", "minus", "plus", "text"].includes(this.variant))
			throw new Error(
				`'coreproject-shape-file' (${this.variant}) not in ['normal', 'minus', 'plus', 'text']`
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
						coreproject-icon-g=""
					>
						<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
						<polyline points="13 2 13 9 20 9"></polyline>
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
						coreproject-icon-g=""
					>
						<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
						<polyline points="14 2 14 8 20 8"></polyline>
						<line x1="9" y1="15" x2="15" y2="15"></line>
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
						coreproject-icon-g=""
					>
						<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
						<polyline points="14 2 14 8 20 8"></polyline>
						<line x1="12" y1="18" x2="12" y2="12"></line>
						<line x1="9" y1="15" x2="15" y2="15"></line>
					</svg>
				</Host>
			);
		} else if (this.variant === "text") {
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
						coreproject-icon-g=""
					>
						<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
						<polyline points="14 2 14 8 20 8"></polyline>
						<line x1="16" y1="13" x2="8" y2="13"></line>
						<line x1="16" y1="17" x2="8" y2="17"></line>
						<polyline points="10 9 9 9 8 9"></polyline>
					</svg>
				</Host>
			);
		}
	}
}
