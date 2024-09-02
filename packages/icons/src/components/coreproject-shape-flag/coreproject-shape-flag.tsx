import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-flag",
	shadow: true,
	styleUrl: "coreproject-shape-flag.css"
})
export class CoreprojectShapeFlag {
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
						d="M2 17.75C2 17.75 3.25 16.5 7 16.5C10.75 16.5 13.25 19 17 19C20.75 19 22 17.75 22 17.75V2.75C22 2.75 20.75 4 17 4C13.25 4 10.75 1.5 7 1.5C3.25 1.5 2 2.75 2 2.75V17.75Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M2 26.5V17.75"
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
