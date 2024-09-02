import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-more",
	shadow: true,
	styleUrl: "coreproject-shape-more.css"
})
export class CoreprojectShapeMore {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 6 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M3 13.25C3.69036 13.25 4.25 12.6904 4.25 12C4.25 11.3096 3.69036 10.75 3 10.75C2.30964 10.75 1.75 11.3096 1.75 12C1.75 12.6904 2.30964 13.25 3 13.25Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M3 4.5C3.69036 4.5 4.25 3.94036 4.25 3.25C4.25 2.55964 3.69036 2 3 2C2.30964 2 1.75 2.55964 1.75 3.25C1.75 3.94036 2.30964 4.5 3 4.5Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M3 22C3.69036 22 4.25 21.4404 4.25 20.75C4.25 20.0596 3.69036 19.5 3 19.5C2.30964 19.5 1.75 20.0596 1.75 20.75C1.75 21.4404 2.30964 22 3 22Z"
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
