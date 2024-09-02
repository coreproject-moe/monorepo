import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-zoom",
	shadow: true,
	styleUrl: "coreproject-shape-zoom.css"
})
export class CoreprojectShapeZoom {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "in" | "out";

	render() {
		if (this.variant === "in") {
			return (
				<Host>
					<svg
						viewBox="0 0 26 26"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M11.75 21.75C17.2728 21.75 21.75 17.2728 21.75 11.75C21.75 6.22715 17.2728 1.75 11.75 1.75C6.22715 1.75 1.75 6.22715 1.75 11.75C1.75 17.2728 6.22715 21.75 11.75 21.75Z"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M24.25 24.25L18.8125 18.8125"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M11.75 8V15.5"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M8 11.75H15.5"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Host>
			);
		} else if (this.variant === "out") {
			return (
				<Host>
					<svg
						viewBox="0 0 26 26"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M11.75 21.75C17.2728 21.75 21.75 17.2728 21.75 11.75C21.75 6.22715 17.2728 1.75 11.75 1.75C6.22715 1.75 1.75 6.22715 1.75 11.75C1.75 17.2728 6.22715 21.75 11.75 21.75Z"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M24.25 24.25L18.8125 18.8125"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M8 11.75H15.5"
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
