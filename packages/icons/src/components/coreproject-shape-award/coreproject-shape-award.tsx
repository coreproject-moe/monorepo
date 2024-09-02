import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-award",
	shadow: true,
	styleUrl: "coreproject-shape-award.css"
})
export class CoreprojectShapeAward {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 22 30"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M11 18.75C15.8325 18.75 19.75 14.8325 19.75 10C19.75 5.16751 15.8325 1.25 11 1.25C6.16751 1.25 2.25 5.16751 2.25 10C2.25 14.8325 6.16751 18.75 11 18.75Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M6.2625 17.3626L4.75 28.7501L11 25.0001L17.25 28.7501L15.7375 17.3501"
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
