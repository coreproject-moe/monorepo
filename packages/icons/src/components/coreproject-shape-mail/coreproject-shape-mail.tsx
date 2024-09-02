import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-mail",
	shadow: true,
	styleUrl: "coreproject-shape-mail.css"
})
export class CoreprojectShapeMail {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 28 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M4 2H24C25.375 2 26.5 3.125 26.5 4.5V19.5C26.5 20.875 25.375 22 24 22H4C2.625 22 1.5 20.875 1.5 19.5V4.5C1.5 3.125 2.625 2 4 2Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M26.5 4.5L14 13.25L1.5 4.5"
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
