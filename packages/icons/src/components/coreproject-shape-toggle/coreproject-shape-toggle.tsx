import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-toggle",
	shadow: true,
	styleUrl: "coreproject-shape-toggle.css"
})
export class CoreprojectShapeToggle {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "off" | "on";

	render() {
		if (this.variant === "off") {
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
						class="feather feather-toggle-left"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect>
						<circle cx="8" cy="12" r="3"></circle>
					</svg>
				</Host>
			);
		} else if (this.variant === "on") {
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
						class="feather feather-toggle-right"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect>
						<circle cx="16" cy="12" r="3"></circle>
					</svg>
				</Host>
			);
		}
	}
}
