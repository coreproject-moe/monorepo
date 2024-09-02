import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-save",
	shadow: true,
	styleUrl: "coreproject-shape-save.css"
})
export class CoreprojectShapeSave {
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
						d="M21.75 24.25H4.25C3.58696 24.25 2.95107 23.9866 2.48223 23.5178C2.01339 23.0489 1.75 22.413 1.75 21.75V4.25C1.75 3.58696 2.01339 2.95107 2.48223 2.48223C2.95107 2.01339 3.58696 1.75 4.25 1.75H18L24.25 8V21.75C24.25 22.413 23.9866 23.0489 23.5178 23.5178C23.0489 23.9866 22.413 24.25 21.75 24.25Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M19.25 24.25V14.25H6.75V24.25"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M6.75 1.75V8H16.75"
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
