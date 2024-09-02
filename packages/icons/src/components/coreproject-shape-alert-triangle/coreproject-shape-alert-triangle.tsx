import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-alert-triangle",
	shadow: true,
	styleUrl: "coreproject-shape-alert-triangle.css"
})
export class CoreprojectShapeAlertTriangle {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
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
						d="M12.8625 2.82501L2.27497 20.5C2.05668 20.878 1.94117 21.3066 1.93995 21.7432C1.93873 22.1797 2.05183 22.6089 2.268 22.9882C2.48417 23.3674 2.79587 23.6834 3.1721 23.9048C3.54833 24.1262 3.97596 24.2452 4.41247 24.25H25.5875C26.024 24.2452 26.4516 24.1262 26.8278 23.9048C27.2041 23.6834 27.5158 23.3674 27.7319 22.9882C27.9481 22.6089 28.0612 22.1797 28.06 21.7432C28.0588 21.3066 27.9433 20.878 27.725 20.5L17.1375 2.82501C16.9146 2.45764 16.6009 2.15391 16.2265 1.94312C15.8521 1.73232 15.4296 1.62158 15 1.62158C14.5703 1.62158 14.1479 1.73232 13.7735 1.94312C13.3991 2.15391 13.0853 2.45764 12.8625 2.82501V2.82501Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M15 9.25V14.25"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M15 19.25H15.0125"
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
