import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-smile",
	shadow: true,
	styleUrl: "coreproject-shape-smile.css"
})
export class CoreprojectShapeSmile {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 28 28"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M14 26.5C20.9036 26.5 26.5 20.9036 26.5 14C26.5 7.09644 20.9036 1.5 14 1.5C7.09644 1.5 1.5 7.09644 1.5 14C1.5 20.9036 7.09644 26.5 14 26.5Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M9 16.5C9 16.5 10.875 19 14 19C17.125 19 19 16.5 19 16.5"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M10.25 10.25H10.2625"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M17.75 10.25H17.7625"
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
