import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-search",
	shadow: true,
	styleUrl: "coreproject-shape-search.css"
})
export class CoreprojectShapeSearch {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 22 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M10.0385 16.5926C14.2869 16.5926 17.7308 13.2763 17.7308 9.18524C17.7308 5.09424 14.2869 1.77783 10.0385 1.77783C5.79016 1.77783 2.34619 5.09424 2.34619 9.18524C2.34619 13.2763 5.79016 16.5926 10.0385 16.5926Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M19.6539 18.4443L15.4712 14.4165"
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
