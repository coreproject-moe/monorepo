import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-bell",
	shadow: true,
	styleUrl: "coreproject-shape-bell.css"
})
export class CoreprojectShapeBell {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "on" | "off";

	render() {
		if (this.variant === "on") {
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
							d="M20.5 9C20.5 7.01088 19.7098 5.10322 18.3033 3.6967C16.8968 2.29018 14.9891 1.5 13 1.5C11.0109 1.5 9.10322 2.29018 7.6967 3.6967C6.29018 5.10322 5.5 7.01088 5.5 9C5.5 17.75 1.75 20.25 1.75 20.25H24.25C24.25 20.25 20.5 17.75 20.5 9Z"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M15.1624 25.25C14.9426 25.6288 14.6272 25.9433 14.2477 26.1619C13.8682 26.3805 13.4379 26.4956 12.9999 26.4956C12.5619 26.4956 12.1316 26.3805 11.7521 26.1619C11.3726 25.9433 11.0572 25.6288 10.8374 25.25"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Host>
			);
		} else if (this.variant === "off") {
			return (
				<Host>
					<svg
						viewBox="0 0 30 30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M17.1624 26.25C16.9426 26.6288 16.6272 26.9433 16.2477 27.1619C15.8682 27.3805 15.4379 27.4956 14.9999 27.4956C14.5619 27.4956 14.1316 27.3805 13.7521 27.1619C13.3726 26.9433 13.0572 26.6288 12.8374 26.25"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M23.2874 16.25C22.7313 14.2143 22.4662 12.1101 22.4999 10"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M7.825 7.8252C7.60783 8.52971 7.49826 9.26297 7.5 10.0002C7.5 18.7502 3.75 21.2502 3.75 21.2502H21.25"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M22.4999 9.9999C22.5019 8.64123 22.1348 7.30753 21.4378 6.14126C20.7408 4.975 19.7401 4.01997 18.5426 3.3782C17.345 2.73643 15.9956 2.43202 14.6385 2.49748C13.2814 2.56295 11.9676 2.99583 10.8374 3.7499"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M1.25 1.25L28.75 28.75"
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
