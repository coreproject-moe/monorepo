import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-trash",
	shadow: true,
	styleUrl: "coreproject-shape-trash.css"
})
export class CoreprojectShapeTrash {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "with-lines" | "without-lines";

	render() {
		if (this.variant === "with-lines") {
			return (
				<Host>
					<svg
						viewBox="0 0 26 28"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M1.75 6.5H4.25H24.25"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M8 6.5V4C8 3.33696 8.26339 2.70107 8.73223 2.23223C9.20107 1.76339 9.83696 1.5 10.5 1.5H15.5C16.163 1.5 16.7989 1.76339 17.2678 2.23223C17.7366 2.70107 18 3.33696 18 4V6.5M21.75 6.5V24C21.75 24.663 21.4866 25.2989 21.0178 25.7678C20.5489 26.2366 19.913 26.5 19.25 26.5H6.75C6.08696 26.5 5.45107 26.2366 4.98223 25.7678C4.51339 25.2989 4.25 24.663 4.25 24V6.5H21.75Z"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M10.5 12.75V20.25"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M15.5 12.75V20.25"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Host>
			);
		} else if (this.variant === "without-lines") {
			return (
				<Host>
					<svg
						viewBox="0 0 26 28"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M1.75 6.5H4.25H24.25"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M8 6.5V4C8 3.33696 8.26339 2.70107 8.73223 2.23223C9.20107 1.76339 9.83696 1.5 10.5 1.5H15.5C16.163 1.5 16.7989 1.76339 17.2678 2.23223C17.7366 2.70107 18 3.33696 18 4V6.5M21.75 6.5V24C21.75 24.663 21.4866 25.2989 21.0178 25.7678C20.5489 26.2366 19.913 26.5 19.25 26.5H6.75C6.08696 26.5 5.45107 26.2366 4.98223 25.7678C4.51339 25.2989 4.25 24.663 4.25 24V6.5H21.75Z"
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
