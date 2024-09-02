import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-gift",
	shadow: true,
	styleUrl: "coreproject-shape-gift.css"
})
export class CoreprojectShapeGift {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
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
						d="M24 14V26.5H4V14"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M26.5 7.75H1.5V14H26.5V7.75Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M14 26.5V7.75"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M14 7.75H8.375C7.5462 7.75 6.75134 7.42076 6.16529 6.83471C5.57924 6.24866 5.25 5.4538 5.25 4.625C5.25 3.7962 5.57924 3.00134 6.16529 2.41529C6.75134 1.82924 7.5462 1.5 8.375 1.5C12.75 1.5 14 7.75 14 7.75Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M14 7.75H19.625C20.4538 7.75 21.2487 7.42076 21.8347 6.83471C22.4208 6.24866 22.75 5.4538 22.75 4.625C22.75 3.7962 22.4208 3.00134 21.8347 2.41529C21.2487 1.82924 20.4538 1.5 19.625 1.5C15.25 1.5 14 7.75 14 7.75Z"
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
