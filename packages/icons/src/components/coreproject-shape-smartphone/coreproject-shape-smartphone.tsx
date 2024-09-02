import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-smartphone",
	shadow: true,
	styleUrl: "coreproject-shape-smartphone.css"
})
export class CoreprojectShapeSmartphone {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 22 28"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M17.25 1.5H4.75C3.36929 1.5 2.25 2.61929 2.25 4V24C2.25 25.3807 3.36929 26.5 4.75 26.5H17.25C18.6307 26.5 19.75 25.3807 19.75 24V4C19.75 2.61929 18.6307 1.5 17.25 1.5Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M11 21.5H11.0125"
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
