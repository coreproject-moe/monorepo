import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-upload",
	shadow: true,
	styleUrl: "coreproject-shape-upload.css"
})
export class CoreprojectShapeUpload {
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
							d="M19.25 8L13 1.75L6.75 8"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M13 1.75V16.75"
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
							d="M20 18L15 13L10 18"
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
							d="M25.4876 20.9874C26.7067 20.3227 27.6699 19.271 28.2249 17.9981C28.78 16.7253 28.8953 15.3039 28.5528 13.9582C28.2103 12.6125 27.4294 11.4192 26.3334 10.5667C25.2374 9.71409 23.8887 9.25077 22.5001 9.24986H20.9251C20.5467 7.78641 19.8415 6.42778 18.8625 5.2761C17.8835 4.12442 16.6561 3.20967 15.2727 2.60062C13.8893 1.99156 12.3858 1.70406 10.8752 1.75971C9.36468 1.81537 7.88641 2.21273 6.55154 2.92194C5.21668 3.63115 4.05996 4.63374 3.16835 5.85434C2.27674 7.07493 1.67343 8.48178 1.4038 9.9691C1.13416 11.4564 1.2052 12.9855 1.61159 14.4414C2.01797 15.8973 2.74912 17.2422 3.75007 18.3749"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M20 18L15 13L10 18"
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
