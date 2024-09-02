import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-lock",
	shadow: true,
	styleUrl: "coreproject-shape-lock.css"
})
export class CoreprojectShapeLock {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 26 28"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M21.75 12.75H4.25C2.86929 12.75 1.75 13.8693 1.75 15.25V24C1.75 25.3807 2.86929 26.5 4.25 26.5H21.75C23.1307 26.5 24.25 25.3807 24.25 24V15.25C24.25 13.8693 23.1307 12.75 21.75 12.75Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M6.75 12.75V7.75C6.75 6.0924 7.40848 4.50269 8.58058 3.33058C9.75269 2.15848 11.3424 1.5 13 1.5C14.6576 1.5 16.2473 2.15848 17.4194 3.33058C18.5915 4.50269 19.25 6.0924 19.25 7.75V12.75"
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
