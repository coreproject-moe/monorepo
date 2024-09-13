import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-edit",
	shadow: true,
	styleUrl: "coreproject-shape-edit.scss"
})
export class CoreprojectShapeEdit {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "box" | "pencil" | "line-with-pencil";

	componentWillLoad() {
		if (!["box", "pencil", "line-with-pencil"].includes(this.variant))
			throw new Error(
				`'coreproject-shape-edit' (${this.variant}) not in ['box', 'pencil', 'line-with-pencil']`
			);
	}

	render() {
		if (this.variant === "box") {
			return (
				<Host>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						height={this?.height}
						width={this?.width}
						part="svg"
						data-svg-scope-marker-e=""
					>
						<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
						<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
					</svg>
				</Host>
			);
		} else if (this.variant === "pencil") {
			return (
				<Host>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						height={this?.height}
						width={this?.width}
						part="svg"
						data-svg-scope-marker-e=""
					>
						<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
					</svg>
				</Host>
			);
		} else if (this.variant === "line-with-pencil") {
			return (
				<Host>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						height={this?.height}
						width={this?.width}
						part="svg"
						data-svg-scope-marker-e=""
					>
						<path d="M12 20h9"></path>
						<path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
					</svg>
				</Host>
			);
		}
	}
}
