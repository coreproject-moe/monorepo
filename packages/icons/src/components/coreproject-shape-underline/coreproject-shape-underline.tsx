import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-underline",
	shadow: true,
	styleUrl: "coreproject-shape-underline.css"
})
export class CoreprojectShapeUnderline {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 24 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M4.5 1.75V10.5C4.5 12.4891 5.29018 14.3968 6.6967 15.8033C8.10322 17.2098 10.0109 18 12 18C13.9891 18 15.8968 17.2098 17.3033 15.8033C18.7098 14.3968 19.5 12.4891 19.5 10.5V1.75"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M2 24.25H22"
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
