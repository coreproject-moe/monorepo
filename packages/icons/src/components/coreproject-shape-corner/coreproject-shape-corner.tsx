import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-corner",
	shadow: true,
	styleUrl: "coreproject-shape-corner.css"
})
export class CoreprojectShapeCorner {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!:
		| "down-right"
		| "down-left"
		| "left-down"
		| "left-up"
		| "up-left"
		| "up-right"
		| "right-up"
		| "right-down";

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
					class={this?.variant}
				>
					<path
						d="M15.75 9.5L22 15.75L15.75 22"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M2 2V10.75C2 12.0761 2.52678 13.3479 3.46447 14.2855C4.40215 15.2232 5.67392 15.75 7 15.75H22"
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
