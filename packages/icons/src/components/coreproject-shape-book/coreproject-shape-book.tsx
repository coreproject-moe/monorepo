import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-book",
	shadow: true,
	styleUrl: "coreproject-shape-book.css"
})
export class CoreprojectShapeBook {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "open" | "close";

	render() {
		if (this.variant === "open") {
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
							d="M1.5 1.75H9C10.3261 1.75 11.5979 2.27678 12.5355 3.21447C13.4732 4.15215 14 5.42392 14 6.75V24.25C14 23.2554 13.6049 22.3016 12.9017 21.5983C12.1984 20.8951 11.2446 20.5 10.25 20.5H1.5V1.75Z"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M26.5 1.75H19C17.6739 1.75 16.4021 2.27678 15.4645 3.21447C14.5268 4.15215 14 5.42392 14 6.75V24.25C14 23.2554 14.3951 22.3016 15.0983 21.5983C15.8016 20.8951 16.7554 20.5 17.75 20.5H26.5V1.75Z"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Host>
			);
		} else if (this.variant === "close") {
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
							d="M2 23.375C2 22.5462 2.32924 21.7513 2.91529 21.1653C3.50134 20.5792 4.2962 20.25 5.125 20.25H22"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M5.125 1.5H22V26.5H5.125C4.2962 26.5 3.50134 26.1708 2.91529 25.5847C2.32924 24.9987 2 24.2038 2 23.375V4.625C2 3.7962 2.32924 3.00134 2.91529 2.41529C3.50134 1.82924 4.2962 1.5 5.125 1.5V1.5Z"
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
