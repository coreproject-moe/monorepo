import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-gift",
	shadow: true,
	styleUrl: "coreproject-shape-gift.css"
})
export class CoreprojectShapeGift {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

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
					data-marker="S"
				>
					<polyline points="20 12 20 22 4 22 4 12"></polyline>
					<rect x="2" y="7" width="20" height="5"></rect>
					<line x1="12" y1="22" x2="12" y2="7"></line>
					<path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
					<path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
				</svg>
			</Host>
		);
	}
}
