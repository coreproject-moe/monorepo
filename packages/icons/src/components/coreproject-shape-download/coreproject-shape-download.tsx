import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-download",
	shadow: true,
	styleUrl: "coreproject-shape-download.css"
})
export class CoreprojectShapeDownload {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "arrow" | "cloud";

	render() {
		if (this.variant === "arrow") {
			return (
				<Host>
					<svg
						viewBox="0 0 26 26"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M24.25 16.75V21.75C24.25 22.413 23.9866 23.0489 23.5178 23.5178C23.0489 23.9866 22.413 24.25 21.75 24.25H4.25C3.58696 24.25 2.95107 23.9866 2.48223 23.5178C2.01339 23.0489 1.75 22.413 1.75 21.75V16.75"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M6.75 10.5L13 16.75L19.25 10.5"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M13 16.75V1.75"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Host>
			);
		} else if (this.variant === "cloud") {
			return (
				<Host>
					<svg
						viewBox="0 0 30 26"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M10 19.25L15 24.25L20 19.25"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M15 13V24.25"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M26.1 20.6124C27.1867 19.8482 28.0017 18.7576 28.4266 17.4989C28.8515 16.2401 28.8642 14.8787 28.463 13.6122C28.0617 12.3457 27.2673 11.24 26.1951 10.4556C25.1228 9.67121 23.8285 9.24888 22.5 9.24992H20.925C20.549 7.78476 19.8456 6.42398 18.8676 5.27002C17.8897 4.11606 16.6627 3.19899 15.279 2.58786C13.8953 1.97673 12.391 1.68745 10.8794 1.74181C9.36774 1.79617 7.88812 2.19275 6.55192 2.9017C5.21572 3.61064 4.05776 4.61348 3.16521 5.8347C2.27267 7.05593 1.66879 8.46372 1.39905 9.9521C1.12931 11.4405 1.20074 12.9707 1.60795 14.4274C2.01516 15.8842 2.74755 17.2296 3.74998 18.3624"
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
