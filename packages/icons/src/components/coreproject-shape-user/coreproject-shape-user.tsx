import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-user",
	shadow: true,
	styleUrl: "coreproject-shape-user.css"
})
export class CoreprojectShapeUser {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "normal" | "check" | "minus" | "plus" | "x";

	render() {
		if (this.variant === "normal") {
			return (
				<Host>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-user"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
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
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-user-check"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
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
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-user-minus"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
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
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-user-plus"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
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
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-user-x"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
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
