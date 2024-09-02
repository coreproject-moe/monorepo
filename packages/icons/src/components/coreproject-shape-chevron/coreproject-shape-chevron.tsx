import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-chevron",
	shadow: true,
	styleUrl: "coreproject-shape-chevron.css"
})
export class CoreprojectShapeChevron {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "up" | "right" | "down" | "left";

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 18 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
					class={this?.variant}
				>
					<path
						d="M16.5 9.75L9 2.25L1.5 9.75"
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
