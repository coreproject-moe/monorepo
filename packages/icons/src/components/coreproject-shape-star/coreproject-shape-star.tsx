import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-star",
	shadow: true,
	styleUrl: "coreproject-shape-star.css"
})
export class CoreprojectShapeStar {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 28 27"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M14 1.5L17.8625 9.325L26.5 10.5875L20.25 16.675L21.725 25.275L14 21.2125L6.275 25.275L7.75 16.675L1.5 10.5875L10.1375 9.325L14 1.5Z"
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
