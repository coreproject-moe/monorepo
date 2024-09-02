import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-share",
	shadow: true,
	styleUrl: "coreproject-shape-share.css"
})
export class CoreprojectShapeShare {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 26 28"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M20.5 9C22.5711 9 24.25 7.32107 24.25 5.25C24.25 3.17893 22.5711 1.5 20.5 1.5C18.4289 1.5 16.75 3.17893 16.75 5.25C16.75 7.32107 18.4289 9 20.5 9Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M5.5 17.75C7.57107 17.75 9.25 16.0711 9.25 14C9.25 11.9289 7.57107 10.25 5.5 10.25C3.42893 10.25 1.75 11.9289 1.75 14C1.75 16.0711 3.42893 17.75 5.5 17.75Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M20.5 26.5C22.5711 26.5 24.25 24.8211 24.25 22.75C24.25 20.6789 22.5711 19 20.5 19C18.4289 19 16.75 20.6789 16.75 22.75C16.75 24.8211 18.4289 26.5 20.5 26.5Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M8.73755 15.8877L17.275 20.8627"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M17.2625 7.1377L8.73755 12.1127"
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
