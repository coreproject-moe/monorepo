import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-edit",
	shadow: true,
	styleUrl: "coreproject-shape-edit.css"
})
export class CoreprojectShapeEdit {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "box" | "pencil" | "line-with-pencil";

	render() {
		if (this.variant === "box") {
			return (
				<Host>
					<svg
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
						viewBox="0 0 30 30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M13.75 5H5C4.33696 5 3.70107 5.26339 3.23223 5.73223C2.76339 6.20107 2.5 6.83696 2.5 7.5V25C2.5 25.663 2.76339 26.2989 3.23223 26.7678C3.70107 27.2366 4.33696 27.5 5 27.5H22.5C23.163 27.5 23.7989 27.2366 24.2678 26.7678C24.7366 26.2989 25 25.663 25 25V16.25"
							stroke="white"
							stroke-
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M23.125 3.12479C23.6223 2.62751 24.2967 2.34814 25 2.34814C25.7033 2.34814 26.3777 2.62751 26.875 3.12479C27.3723 3.62208 27.6517 4.29653 27.6517 4.99979C27.6517 5.70306 27.3723 6.37751 26.875 6.87479L15 18.7498L10 19.9998L11.25 14.9998L23.125 3.12479Z"
							stroke="white"
							stroke-
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Host>
			);
		} else if (this.variant === "pencil") {
			return (
				<Host>
					<svg
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
						viewBox="0 0 30 30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M21.25 3.74989C21.5783 3.42158 21.9681 3.16116 22.397 2.98348C22.826 2.8058 23.2857 2.71436 23.75 2.71436C24.2143 2.71436 24.674 2.8058 25.103 2.98348C25.5319 3.16116 25.9217 3.42158 26.25 3.74989C26.5783 4.07819 26.8387 4.46795 27.0164 4.8969C27.1941 5.32585 27.2855 5.7856 27.2855 6.24989C27.2855 6.71418 27.1941 7.17393 27.0164 7.60288C26.8387 8.03183 26.5783 8.42158 26.25 8.74989L9.375 25.6249L2.5 27.4999L4.375 20.6249L21.25 3.74989Z"
							stroke="white"
							stroke-
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Host>
			);
		} else if (this.variant === "line-with-pencil") {
			return (
				<Host>
					<svg
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
						viewBox="0 0 30 30"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M15 25H26.25"
							stroke="white"
							stroke-
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M20.625 4.37479C21.1223 3.87751 21.7967 3.59814 22.5 3.59814C22.8482 3.59814 23.193 3.66673 23.5147 3.79999C23.8365 3.93325 24.1288 4.12857 24.375 4.37479C24.6212 4.62102 24.8165 4.91334 24.9498 5.23505C25.0831 5.55677 25.1517 5.90158 25.1517 6.24979C25.1517 6.59801 25.0831 6.94282 24.9498 7.26454C24.8165 7.58625 24.6212 7.87857 24.375 8.12479L8.75 23.7498L3.75 24.9998L5 19.9998L20.625 4.37479Z"
							stroke="white"
							stroke-
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Host>
			);
		}
	}
}
