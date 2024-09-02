import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-monitor",
	shadow: true,
	styleUrl: "coreproject-shape-monitor.css"
})
export class CoreprojectShapeMonitor {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 28 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M24 1.75H4C2.61929 1.75 1.5 2.86929 1.5 4.25V16.75C1.5 18.1307 2.61929 19.25 4 19.25H24C25.3807 19.25 26.5 18.1307 26.5 16.75V4.25C26.5 2.86929 25.3807 1.75 24 1.75Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M9 24.25H19"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M14 19.25V24.25"
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
