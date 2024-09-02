import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-maximize",
	shadow: true,
	styleUrl: "coreproject-shape-maximize.css"
})
export class CoreprojectShapeMaximize {
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
						d="M8 1.75H4.25C3.58696 1.75 2.95107 2.01339 2.48223 2.48223C2.01339 2.95107 1.75 3.58696 1.75 4.25V8M24.25 8V4.25C24.25 3.58696 23.9866 2.95107 23.5178 2.48223C23.0489 2.01339 22.413 1.75 21.75 1.75H18M18 24.25H21.75C22.413 24.25 23.0489 23.9866 23.5178 23.5178C23.9866 23.0489 24.25 22.413 24.25 21.75V18M1.75 18V21.75C1.75 22.413 2.01339 23.0489 2.48223 23.5178C2.95107 23.9866 3.58696 24.25 4.25 24.25H8"
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
