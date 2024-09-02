import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-shield",
	shadow: true,
	styleUrl: "coreproject-shape-shield.css"
})
export class CoreprojectShapeShield {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "on" | "off";

	render() {
		if (this.variant === "on") {
			return (
				<Host>
					<svg
						viewBox="0 0 24 28"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M12 26.5C12 26.5 22 21.5 22 14V5.25L12 1.5L2 5.25V14C2 21.5 12 26.5 12 26.5Z"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Host>
			);
		} else if (this.variant === "off") {
			return (
				<Host>
					<svg
						viewBox="0 0 30 30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M24.6125 17.5C24.8639 16.6902 24.9945 15.8478 25 15V6.25L15 2.5L11.05 3.975"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M5.9125 5.9126L5 6.2501V15.0001C5 22.5001 15 27.5001 15 27.5001C17.6463 26.1038 20.0246 24.2502 22.025 22.0251"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M1.25 1.25L28.75 28.75"
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
}
