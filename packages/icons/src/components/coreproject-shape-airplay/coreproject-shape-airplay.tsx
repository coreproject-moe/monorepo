import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-airplay",
	shadow: true,
	styleUrl: "coreproject-shape-airplay.css"
})
export class CoreprojectShapeAirplay {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 28 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M5.25 19.25H4C3.33696 19.25 2.70107 18.9866 2.23223 18.5178C1.76339 18.0489 1.5 17.413 1.5 16.75V4.25C1.5 3.58696 1.76339 2.95107 2.23223 2.48223C2.70107 2.01339 3.33696 1.75 4 1.75H24C24.663 1.75 25.2989 2.01339 25.7678 2.48223C26.2366 2.95107 26.5 3.58696 26.5 4.25V16.75C26.5 17.413 26.2366 18.0489 25.7678 18.5178C25.2989 18.9866 24.663 19.25 24 19.25H22.75"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M14 16.75L20.25 24.25H7.75L14 16.75Z"
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
