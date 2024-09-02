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
						viewBox="0 0 30 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M20 2.25H10C5.16751 2.25 1.25 6.16751 1.25 11C1.25 15.8325 5.16751 19.75 10 19.75H20C24.8325 19.75 28.75 15.8325 28.75 11C28.75 6.16751 24.8325 2.25 20 2.25Z"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M10 14.75C12.0711 14.75 13.75 13.0711 13.75 11C13.75 8.92893 12.0711 7.25 10 7.25C7.92893 7.25 6.25 8.92893 6.25 11C6.25 13.0711 7.92893 14.75 10 14.75Z"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Host>
			);
		} else if (this.variant === "on") {
			return (
				<Host>
					<svg
						viewBox="0 0 30 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M20 2.25H10C5.16751 2.25 1.25 6.16751 1.25 11C1.25 15.8325 5.16751 19.75 10 19.75H20C24.8325 19.75 28.75 15.8325 28.75 11C28.75 6.16751 24.8325 2.25 20 2.25Z"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M20 14.75C22.0711 14.75 23.75 13.0711 23.75 11C23.75 8.92893 22.0711 7.25 20 7.25C17.9289 7.25 16.25 8.92893 16.25 11C16.25 13.0711 17.9289 14.75 20 14.75Z"
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
