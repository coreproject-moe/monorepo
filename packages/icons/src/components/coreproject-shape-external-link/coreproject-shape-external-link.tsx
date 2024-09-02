import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-external-link",
	shadow: true,
	styleUrl: "coreproject-shape-external-link.css"
})
export class CoreprojectShapeExternalLink {
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
						d="M20.5 14.25V21.75C20.5 22.413 20.2366 23.0489 19.7678 23.5178C19.2989 23.9866 18.663 24.25 18 24.25H4.25C3.58696 24.25 2.95107 23.9866 2.48223 23.5178C2.01339 23.0489 1.75 22.413 1.75 21.75V8C1.75 7.33696 2.01339 6.70107 2.48223 6.23223C2.95107 5.76339 3.58696 5.5 4.25 5.5H11.75"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M16.75 1.75H24.25V9.25"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M10.5 15.5L24.25 1.75"
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
