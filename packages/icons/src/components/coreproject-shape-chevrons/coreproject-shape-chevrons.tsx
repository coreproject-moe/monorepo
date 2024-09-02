import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-chevrons",
	shadow: true,
	styleUrl: "coreproject-shape-chevrons.css"
})
export class CoreprojectShapeChevrons {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "up" | "right" | "down" | "left";

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 16 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
					class={this?.variant}
				>
					<path
						d="M14.25 7.75L8 1.5L1.75 7.75"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M14.25 16.5L8 10.25L1.75 16.5"
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
