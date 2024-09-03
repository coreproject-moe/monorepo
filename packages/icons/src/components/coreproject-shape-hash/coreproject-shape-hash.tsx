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
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-hash"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<line x1="4" y1="9" x2="20" y2="9"></line>
					<line x1="4" y1="15" x2="20" y2="15"></line>
					<line x1="10" y1="3" x2="8" y2="21"></line>
					<line x1="16" y1="3" x2="14" y2="21"></line>
				</svg>
			</Host>
		);
	}
}
