import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-shopping-cart",
	shadow: true,
	styleUrl: "coreproject-shape-shopping-cart.css"
})
export class CoreprojectShapeShoppingCart {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 30 29"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M11.25 27.5C11.9404 27.5 12.5 26.9404 12.5 26.25C12.5 25.5596 11.9404 25 11.25 25C10.5596 25 10 25.5596 10 26.25C10 26.9404 10.5596 27.5 11.25 27.5Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M25 27.5C25.6904 27.5 26.25 26.9404 26.25 26.25C26.25 25.5596 25.6904 25 25 25C24.3096 25 23.75 25.5596 23.75 26.25C23.75 26.9404 24.3096 27.5 25 27.5Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M1.25 1.25H6.25L9.6 17.9875C9.71431 18.563 10.0274 19.0799 10.4844 19.4479C10.9415 19.8158 11.5134 20.0112 12.1 20H24.25C24.8366 20.0112 25.4085 19.8158 25.8656 19.4479C26.3226 19.0799 26.6357 18.563 26.75 17.9875L28.75 7.5H7.5"
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
