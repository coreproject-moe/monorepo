import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-folder",
	shadow: true,
	styleUrl: "coreproject-shape-folder.css"
})
export class CoreprojectShapeFolder {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "normal" | "minus" | "plus";

	render() {
		if (this.variant === "normal") {
			return (
				<Host>
					<svg
						viewBox="0 0 28 26"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M26.5 21.75C26.5 22.413 26.2366 23.0489 25.7678 23.5178C25.2989 23.9866 24.663 24.25 24 24.25H4C3.33696 24.25 2.70107 23.9866 2.23223 23.5178C1.76339 23.0489 1.5 22.413 1.5 21.75V4.25C1.5 3.58696 1.76339 2.95107 2.23223 2.48223C2.70107 2.01339 3.33696 1.75 4 1.75H10.25L12.75 5.5H24C24.663 5.5 25.2989 5.76339 25.7678 6.23223C26.2366 6.70107 26.5 7.33696 26.5 8V21.75Z"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Host>
			);
		} else if (this.variant === "minus") {
			return (
				<Host>
					<svg
						viewBox="0 0 28 26"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M26.5 21.75C26.5 22.413 26.2366 23.0489 25.7678 23.5178C25.2989 23.9866 24.663 24.25 24 24.25H4C3.33696 24.25 2.70107 23.9866 2.23223 23.5178C1.76339 23.0489 1.5 22.413 1.5 21.75V4.25C1.5 3.58696 1.76339 2.95107 2.23223 2.48223C2.70107 2.01339 3.33696 1.75 4 1.75H10.25L12.75 5.5H24C24.663 5.5 25.2989 5.76339 25.7678 6.23223C26.2366 6.70107 26.5 7.33696 26.5 8V21.75Z"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M10.25 15.5H17.75"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Host>
			);
		} else if (this.variant === "plus") {
			return (
				<Host>
					<svg
						viewBox="0 0 28 26"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M26.5 21.75C26.5 22.413 26.2366 23.0489 25.7678 23.5178C25.2989 23.9866 24.663 24.25 24 24.25H4C3.33696 24.25 2.70107 23.9866 2.23223 23.5178C1.76339 23.0489 1.5 22.413 1.5 21.75V4.25C1.5 3.58696 1.76339 2.95107 2.23223 2.48223C2.70107 2.01339 3.33696 1.75 4 1.75H10.25L12.75 5.5H24C24.663 5.5 25.2989 5.76339 25.7678 6.23223C26.2366 6.70107 26.5 7.33696 26.5 8V21.75Z"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M14 11.75V19.25"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M10.25 15.5H17.75"
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
