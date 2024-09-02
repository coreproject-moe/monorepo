import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-play-circle",
	shadow: true,
	styleUrl: "coreproject-shape-play-circle.css"
})
export class CoreprojectShapePlayCircle {
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
						d="M11.5 9L19 14L11.5 19V9Z"
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
