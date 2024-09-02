import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-moon",
	shadow: true,
	styleUrl: "coreproject-shape-moon.css"
})
export class CoreprojectShapeMoon {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
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
						d="M24.2501 13.9875C24.0535 16.1153 23.2549 18.143 21.9479 19.8335C20.6409 21.524 18.8795 22.8072 16.8698 23.5332C14.86 24.2591 12.6851 24.3977 10.5995 23.9326C8.51389 23.4676 6.60386 22.4182 5.0929 20.9072C3.58194 19.3963 2.53255 17.4862 2.06751 15.4006C1.60247 13.315 1.74102 11.1401 2.46695 9.13037C3.19288 7.12064 4.47616 5.35921 6.16664 4.05219C7.85711 2.74517 9.88487 1.94663 12.0126 1.75C10.7669 3.43533 10.1674 5.51181 10.3233 7.60177C10.4791 9.69172 11.3799 11.6563 12.8619 13.1382C14.3438 14.6202 16.3084 15.521 18.3984 15.6768C20.4883 15.8327 22.5648 15.2332 24.2501 13.9875Z"
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
