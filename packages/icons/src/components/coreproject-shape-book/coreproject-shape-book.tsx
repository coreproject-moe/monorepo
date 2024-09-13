import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-book",
	shadow: true,
	styleUrl: "coreproject-shape-book.scss"
})
export class CoreprojectShapeBook {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "open" | "close";

	componentWillLoad() {
		if (!["open", "close"].includes(this.variant))
			throw new Error(`'coreproject-shape-book' (${this.variant}) not in ['open', 'close']`);
	}

	render() {
		if (this.variant === "open") {
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
						coreproject-style-b=""
					>
						<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
						<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
					</svg>
				</Host>
			);
		} else if (this.variant === "close") {
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
						coreproject-style-b=""
					>
						<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
						<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
					</svg>
				</Host>
			);
		}
	}
}
