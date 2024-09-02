import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-file",
	shadow: true,
	styleUrl: "coreproject-shape-file.css"
})
export class CoreprojectShapeFile {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "normal" | "minus" | "plus" | "text";

	render() {
		if (this.variant === "normal") {
			return (
				<Host>
					<svg
						viewBox="0 0 24 28"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M13.25 1.5H4.5C3.83696 1.5 3.20107 1.76339 2.73223 2.23223C2.26339 2.70107 2 3.33696 2 4V24C2 24.663 2.26339 25.2989 2.73223 25.7678C3.20107 26.2366 3.83696 26.5 4.5 26.5H19.5C20.163 26.5 20.7989 26.2366 21.2678 25.7678C21.7366 25.2989 22 24.663 22 24V10.25L13.25 1.5Z"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M13.25 1.5V10.25H22"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Host>
			);
		} else if (this.variant === "minus") {
			return (
				<Host>
					<svg
						viewBox="0 0 24 28"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M14.5 1.5H4.5C3.83696 1.5 3.20107 1.76339 2.73223 2.23223C2.26339 2.70107 2 3.33696 2 4V24C2 24.663 2.26339 25.2989 2.73223 25.7678C3.20107 26.2366 3.83696 26.5 4.5 26.5H19.5C20.163 26.5 20.7989 26.2366 21.2678 25.7678C21.7366 25.2989 22 24.663 22 24V9L14.5 1.5Z"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M14.5 1.5V9H22"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M8.25 17.75H15.75"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Host>
			);
		} else if (this.variant === "plus") {
			return (
				<Host>
					<svg
						viewBox="0 0 24 28"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M14.5 1.5H4.5C3.83696 1.5 3.20107 1.76339 2.73223 2.23223C2.26339 2.70107 2 3.33696 2 4V24C2 24.663 2.26339 25.2989 2.73223 25.7678C3.20107 26.2366 3.83696 26.5 4.5 26.5H19.5C20.163 26.5 20.7989 26.2366 21.2678 25.7678C21.7366 25.2989 22 24.663 22 24V9L14.5 1.5Z"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M14.5 1.5V9H22"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M12 21.5V14"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M8.25 17.75H15.75"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Host>
			);
		} else if (this.variant === "text") {
			return (
				<Host>
					<svg
						viewBox="0 0 24 28"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M14.5 1.5H4.5C3.83696 1.5 3.20107 1.76339 2.73223 2.23223C2.26339 2.70107 2 3.33696 2 4V24C2 24.663 2.26339 25.2989 2.73223 25.7678C3.20107 26.2366 3.83696 26.5 4.5 26.5H19.5C20.163 26.5 20.7989 26.2366 21.2678 25.7678C21.7366 25.2989 22 24.663 22 24V9L14.5 1.5Z"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M14.5 1.5V9H22"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M17 15.25H7"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M17 20.25H7"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M9.5 10.25H8.25H7"
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
