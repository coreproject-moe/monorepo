import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-link",
	shadow: true,
	styleUrl: "coreproject-shape-link.css"
})
export class CoreprojectShapeLink {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "tilted" | "horizontal";

	render() {
		if (this.variant === "tilted") {
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
							d="M11.5 15.25C12.0368 15.9676 12.7217 16.5614 13.5082 16.9911C14.2947 17.4208 15.1644 17.6764 16.0583 17.7404C16.9522 17.8044 17.8495 17.6754 18.6892 17.3622C19.5289 17.049 20.2914 16.5588 20.925 15.925L24.675 12.175C25.8135 10.9962 26.4435 9.41743 26.4292 7.7787C26.415 6.13997 25.7577 4.57239 24.5989 3.41359C23.4401 2.25479 21.8725 1.59748 20.2338 1.58324C18.595 1.569 17.0163 2.19897 15.8375 3.33746L13.6875 5.47496"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M16.5 12.75C15.9632 12.0324 15.2783 11.4386 14.4918 11.0089C13.7053 10.5792 12.8356 10.3236 11.9417 10.2596C11.0478 10.1956 10.1505 10.3246 9.31082 10.6378C8.47113 10.951 7.70861 11.4412 7.07501 12.075L3.32501 15.825C2.18652 17.0038 1.55655 18.5826 1.57079 20.2213C1.58503 21.86 2.24234 23.4276 3.40114 24.5864C4.55994 25.7452 6.12752 26.4025 7.76625 26.4168C9.40498 26.431 10.9837 25.801 12.1625 24.6625L14.3 22.525"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</Host>
			);
		} else if (this.variant === "horizontal") {
			return (
				<Host>
					<svg
						viewBox="0 0 30 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						height={this?.height}
						width={this?.width}
						style={css_to_jsx(this?._style)}
					>
						<path
							d="M18.75 1.75H22.5C23.3208 1.75 24.1335 1.91166 24.8918 2.22575C25.6501 2.53984 26.3391 3.00022 26.9194 3.58058C27.4998 4.16095 27.9602 4.84994 28.2742 5.60823C28.5883 6.36651 28.75 7.17924 28.75 8C28.75 8.82076 28.5883 9.63349 28.2742 10.3918C27.9602 11.1501 27.4998 11.8391 26.9194 12.4194C26.3391 12.9998 25.6501 13.4602 24.8918 13.7742C24.1335 14.0883 23.3208 14.25 22.5 14.25H18.75M11.25 14.25H7.5C6.67924 14.25 5.86651 14.0883 5.10823 13.7742C4.34994 13.4602 3.66095 12.9998 3.08058 12.4194C1.90848 11.2473 1.25 9.6576 1.25 8C1.25 6.3424 1.90848 4.75269 3.08058 3.58058C4.25269 2.40848 5.8424 1.75 7.5 1.75H11.25"
							stroke="currentColor"
							stroke-width="3"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M10 8H20"
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
