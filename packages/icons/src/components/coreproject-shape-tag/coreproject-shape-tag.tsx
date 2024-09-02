import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-tag",
	shadow: true,
	styleUrl: "coreproject-shape-tag.css"
})
export class CoreprojectShapeTag {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 27 27"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M24.7375 15.7625L15.775 24.725C15.5428 24.9574 15.2671 25.1418 14.9636 25.2677C14.6601 25.3935 14.3348 25.4582 14.0063 25.4582C13.6777 25.4582 13.3524 25.3935 13.0489 25.2677C12.7454 25.1418 12.4697 24.9574 12.2375 24.725L1.5 14V1.5H14L24.7375 12.2375C25.2031 12.7059 25.4645 13.3395 25.4645 14C25.4645 14.6605 25.2031 15.2941 24.7375 15.7625V15.7625Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M7.75 7.75H7.7625"
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
