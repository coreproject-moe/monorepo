import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-repeat",
	shadow: true,
	styleUrl: "coreproject-shape-repeat.css"
})
export class CoreprojectShapeRepeat {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 26 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M19.25 1.25L24.25 6.25L19.25 11.25"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M1.75 13.75V11.25C1.75 9.92392 2.27678 8.65215 3.21447 7.71447C4.15215 6.77678 5.42392 6.25 6.75 6.25H24.25"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M6.75 28.75L1.75 23.75L6.75 18.75"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M24.25 16.25V18.75C24.25 20.0761 23.7232 21.3479 22.7855 22.2855C21.8479 23.2232 20.5761 23.75 19.25 23.75H1.75"
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
