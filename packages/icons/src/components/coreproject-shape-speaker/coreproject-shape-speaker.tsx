import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-speaker",
	shadow: true,
	styleUrl: "coreproject-shape-speaker.css"
})
export class CoreprojectShapeSpeaker {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 24 28"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M19.5 1.5H4.5C3.11929 1.5 2 2.61929 2 4V24C2 25.3807 3.11929 26.5 4.5 26.5H19.5C20.8807 26.5 22 25.3807 22 24V4C22 2.61929 20.8807 1.5 19.5 1.5Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M12 21.5C14.7614 21.5 17 19.2614 17 16.5C17 13.7386 14.7614 11.5 12 11.5C9.23858 11.5 7 13.7386 7 16.5C7 19.2614 9.23858 21.5 12 21.5Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M12 6.5H12.0125"
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
