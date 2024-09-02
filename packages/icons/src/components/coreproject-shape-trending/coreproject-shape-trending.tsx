import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-trending",
	shadow: true,
	styleUrl: "coreproject-shape-trending.css"
})
export class CoreprojectShapeTrending {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "up" | "down";

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 30 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
					class={this?.variant}
				>
					<path
						d="M28.75 1.5L16.875 13.375L10.625 7.125L1.25 16.5"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M21.25 1.5H28.75V9"
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
