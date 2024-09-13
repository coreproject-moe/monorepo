import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-folder",
	shadow: true,
	styleUrl: "coreproject-shape-folder.scss"
})
export class CoreprojectShapeFolder {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "normal" | "minus" | "plus";

	componentWillLoad() {
		if (!["normal", "minus", "plus"].includes(this.variant))
			throw new Error(
				`'coreproject-shape-folder' (${this.variant}) not in ['normal', 'minus', 'plus']`
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
						height={this?.height}
						width={this?.width}
						part="svg"
						coreproject-icon-h=""
					>
						<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
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
						height={this?.height}
						width={this?.width}
						part="svg"
						coreproject-icon-h=""
					>
						<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
						<line x1="9" y1="14" x2="15" y2="14"></line>
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
						height={this?.height}
						width={this?.width}
						part="svg"
						coreproject-icon-h=""
					>
						<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
						<line x1="12" y1="11" x2="12" y2="17"></line>
						<line x1="9" y1="14" x2="15" y2="14"></line>
					</svg>
				</Host>
			);
		}
	}
}
