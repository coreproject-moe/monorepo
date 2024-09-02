import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-info",
	shadow: true,
	styleUrl: "coreproject-shape-info.css"
})
export class CoreprojectShapeInfo {
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
						d="M14 19V14"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M14 9H14.0125"
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
