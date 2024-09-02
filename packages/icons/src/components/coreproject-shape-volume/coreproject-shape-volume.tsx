import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-volume",
	shadow: true,
	styleUrl: "coreproject-shape-volume.css"
})
export class CoreprojectShapeVolume {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "off" | "half" | "full" | "mute";

	render() {
		if (this.variant === "off") {
			return (
				<Host>
					<svg
						viewBox="0 0 15 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M12.75 2.25L6.5 7.25H1.5V14.75H6.5L12.75 19.75V2.25Z"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Host>
			);
		} else if (this.variant === "half") {
			return (
				<Host>
					<svg
						viewBox="0 0 22 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M12.75 2.25L6.5 7.25H1.5V14.75H6.5L12.75 19.75V2.25Z"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M18.425 6.5752C19.5967 7.74724 20.255 9.33667 20.255 10.9939C20.255 12.6512 19.5967 14.2406 18.425 15.4127"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Host>
			);
		} else if (this.variant === "full") {
			return (
				<Host>
					<svg
						viewBox="0 0 28 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M12.75 2.25L6.5 7.25H1.5V14.75H6.5L12.75 19.75V2.25Z"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M22.8375 2.1626C25.1809 4.50669 26.4974 7.68555 26.4974 11.0001C26.4974 14.3146 25.1809 17.4935 22.8375 19.8376M18.425 6.5751C19.5967 7.74715 20.255 9.33657 20.255 10.9938C20.255 12.6511 19.5967 14.2406 18.425 15.4126"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Host>
			);
		} else if (this.variant === "mute") {
			return (
				<Host>
					<svg
						viewBox="0 0 29 22"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M12.75 2.25L6.5 7.25H1.5V14.75H6.5L12.75 19.75V2.25Z"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M27.75 7.25L20.25 14.75"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M20.25 7.25L27.75 14.75"
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
