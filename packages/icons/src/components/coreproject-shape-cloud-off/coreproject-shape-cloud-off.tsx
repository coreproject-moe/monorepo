import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-cloud-off",
	shadow: true,
	styleUrl: "coreproject-shape-cloud-off.css"
})
export class CoreprojectShapeCloudOff {
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
					class="feather feather-cloud-off"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path>
					<line x1="1" y1="1" x2="23" y2="23"></line>
				</svg>
			</Host>
		);
	}
}
