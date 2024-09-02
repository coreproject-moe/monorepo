import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-hash",
	shadow: true,
	styleUrl: "coreproject-shape-hash.css"
})
export class CoreprojectShapeHash {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 24 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M2 9.25H22"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M2 16.75H22"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M9.5 1.75L7 24.25"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M17 1.75L14.5 24.25"
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
