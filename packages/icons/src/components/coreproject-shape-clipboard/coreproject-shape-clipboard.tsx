import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-clipboard",
	shadow: true,
	styleUrl: "coreproject-shape-clipboard.css"
})
export class CoreprojectShapeClipboard {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
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
						d="M17 4H19.5C20.163 4 20.7989 4.26339 21.2678 4.73223C21.7366 5.20107 22 5.83696 22 6.5V24C22 24.663 21.7366 25.2989 21.2678 25.7678C20.7989 26.2366 20.163 26.5 19.5 26.5H4.5C3.83696 26.5 3.20107 26.2366 2.73223 25.7678C2.26339 25.2989 2 24.663 2 24V6.5C2 5.83696 2.26339 5.20107 2.73223 4.73223C3.20107 4.26339 3.83696 4 4.5 4H7"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M15.75 1.5H8.25C7.55964 1.5 7 2.05964 7 2.75V5.25C7 5.94036 7.55964 6.5 8.25 6.5H15.75C16.4404 6.5 17 5.94036 17 5.25V2.75C17 2.05964 16.4404 1.5 15.75 1.5Z"
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
