import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-align",
	shadow: true,
	styleUrl: "coreproject-shape-align.css"
})
export class CoreprojectShapeAlign {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "center" | "justify" | "left" | "right";

	render() {
		if (this.variant === "center") {
			return (
				<Host>
					<svg
						viewBox="0 0 26 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M20.5 6.5H5.5"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M24.25 1.5H1.75"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M24.25 11.5H1.75"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M20.5 16.5H5.5"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Host>
			);
		} else if (this.variant === "justify") {
			return (
				<Host>
					<svg
						viewBox="0 0 26 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M24.25 6.5H1.75"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M24.25 1.5H1.75"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M24.25 11.5H1.75"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M24.25 16.5H1.75"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Host>
			);
		} else if (this.variant === "left") {
			return (
				<Host>
					<svg
						viewBox="0 0 26 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M19.25 6.5H1.75"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M24.25 1.5H1.75"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M24.25 11.5H1.75"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M19.25 16.5H1.75"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Host>
			);
		} else if (this.variant === "right") {
			return (
				<Host>
					<svg
						viewBox="0 0 26 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M24.25 6.5H6.75"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M24.25 1.5H1.75"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M24.25 11.5H1.75"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M24.25 16.5H6.75"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Host>
			);
		}
	}
}
