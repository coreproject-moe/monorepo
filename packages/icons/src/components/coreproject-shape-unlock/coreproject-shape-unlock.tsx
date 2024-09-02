import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-unlock",
	shadow: true,
	styleUrl: "coreproject-shape-unlock.css"
})
export class CoreprojectShapeUnlock {
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
						d="M6.75 12.7499V7.74995C6.74845 6.20001 7.32285 4.70478 8.36172 3.55453C9.40059 2.40428 10.8298 1.68108 12.3719 1.52531C13.914 1.36954 15.4589 1.79233 16.7068 2.71159C17.9548 3.63085 18.8166 4.98101 19.125 6.49995"
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
