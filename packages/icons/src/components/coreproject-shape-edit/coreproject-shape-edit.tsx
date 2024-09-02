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
						viewBox="0 0 29 29"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M12.75 5H4C3.33696 5 2.70107 5.26339 2.23223 5.73223C1.76339 6.20107 1.5 6.83696 1.5 7.5V25C1.5 25.663 1.76339 26.2989 2.23223 26.7678C2.70107 27.2366 3.33696 27.5 4 27.5H21.5C22.163 27.5 22.7989 27.2366 23.2678 26.7678C23.7366 26.2989 24 25.663 24 25V16.25"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M22.125 3.12479C22.6223 2.62751 23.2967 2.34814 24 2.34814C24.7033 2.34814 25.3777 2.62751 25.875 3.12479C26.3723 3.62208 26.6517 4.29653 26.6517 4.99979C26.6517 5.70306 26.3723 6.37751 25.875 6.87479L14 18.7498L9 19.9998L10.25 14.9998L22.125 3.12479Z"
							stroke="currentColor"
							stroke-width="3"
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
						viewBox="0 0 28 28"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M20.25 2.74989C20.5783 2.42158 20.9681 2.16116 21.397 1.98348C21.826 1.8058 22.2857 1.71436 22.75 1.71436C23.2143 1.71436 23.674 1.8058 24.103 1.98348C24.5319 2.16116 24.9217 2.42158 25.25 2.74989C25.5783 3.07819 25.8387 3.46795 26.0164 3.8969C26.1941 4.32585 26.2855 4.7856 26.2855 5.24989C26.2855 5.71418 26.1941 6.17393 26.0164 6.60288C25.8387 7.03183 25.5783 7.42158 25.25 7.74989L8.375 24.6249L1.5 26.4999L3.375 19.6249L20.25 2.74989Z"
							stroke="currentColor"
							stroke-width="3"
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
						viewBox="0 0 26 25"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M13 23H24.25"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M18.625 2.37479C19.1223 1.87751 19.7967 1.59814 20.5 1.59814C20.8482 1.59814 21.193 1.66673 21.5147 1.79999C21.8365 1.93325 22.1288 2.12857 22.375 2.37479C22.6212 2.62102 22.8165 2.91334 22.9498 3.23505C23.0831 3.55677 23.1517 3.90158 23.1517 4.24979C23.1517 4.59801 23.0831 4.94282 22.9498 5.26454C22.8165 5.58625 22.6212 5.87857 22.375 6.12479L6.75 21.7498L1.75 22.9998L3 17.9998L18.625 2.37479Z"
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
