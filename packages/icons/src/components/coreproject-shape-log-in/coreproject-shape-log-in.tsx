import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-log-in",
	shadow: true,
	styleUrl: "coreproject-shape-log-in.css"
})
export class CoreprojectShapeLogIn {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 26 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M16.75 1.75H21.75C22.413 1.75 23.0489 2.01339 23.5178 2.48223C23.9866 2.95107 24.25 3.58696 24.25 4.25V21.75C24.25 22.413 23.9866 23.0489 23.5178 23.5178C23.0489 23.9866 22.413 24.25 21.75 24.25H16.75"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M10.5 19.25L16.75 13L10.5 6.75"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M16.75 13H1.75"
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
