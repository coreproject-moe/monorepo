import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-thumbs",
	shadow: true,
	styleUrl: "coreproject-shape-thumbs.css"
})
export class CoreprojectShapeThumbs {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "up" | "down";

	render() {
		return (
			<Host>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
					data-marker="2"
					class={this?.variant}
				>
					<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
				</svg>
			</Host>
		);
	}
}
