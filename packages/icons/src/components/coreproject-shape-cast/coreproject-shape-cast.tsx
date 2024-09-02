import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-cast",
	shadow: true,
	styleUrl: "coreproject-shape-cast.css"
})
export class CoreprojectShapeCast {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 28 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M1.5 7V4.5C1.5 3.83696 1.76339 3.20107 2.23223 2.73223C2.70107 2.26339 3.33696 2 4 2H24C24.663 2 25.2989 2.26339 25.7678 2.73223C26.2366 3.20107 26.5 3.83696 26.5 4.5V19.5C26.5 20.163 26.2366 20.7989 25.7678 21.2678C25.2989 21.7366 24.663 22 24 22H16.5M1.5 17.125C2.70112 17.37 3.80368 17.9627 4.67048 18.8295C5.53728 19.6963 6.13004 20.7989 6.375 22L1.5 17.125ZM1.5 12.0625C4.03849 12.3448 6.40534 13.4826 8.21139 15.2886C10.0174 17.0947 11.1552 19.4615 11.4375 22L1.5 12.0625Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M1.5 22H1.5125"
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
