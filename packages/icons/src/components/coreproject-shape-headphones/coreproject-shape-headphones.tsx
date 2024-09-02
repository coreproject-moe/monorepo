import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-headphones",
	shadow: true,
	styleUrl: "coreproject-shape-headphones.css"
})
export class CoreprojectShapeHeadphones {
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
						d="M1.75 20.5V13C1.75 10.0163 2.93526 7.15483 5.04505 5.04505C7.15483 2.93526 10.0163 1.75 13 1.75C15.9837 1.75 18.8452 2.93526 20.955 5.04505C23.0647 7.15483 24.25 10.0163 24.25 13V20.5"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M24.25 21.75C24.25 22.413 23.9866 23.0489 23.5178 23.5178C23.0489 23.9866 22.413 24.25 21.75 24.25H20.5C19.837 24.25 19.2011 23.9866 18.7322 23.5178C18.2634 23.0489 18 22.413 18 21.75V18C18 17.337 18.2634 16.7011 18.7322 16.2322C19.2011 15.7634 19.837 15.5 20.5 15.5H24.25V21.75ZM1.75 21.75C1.75 22.413 2.01339 23.0489 2.48223 23.5178C2.95107 23.9866 3.58696 24.25 4.25 24.25H5.5C6.16304 24.25 6.79893 23.9866 7.26777 23.5178C7.73661 23.0489 8 22.413 8 21.75V18C8 17.337 7.73661 16.7011 7.26777 16.2322C6.79893 15.7634 6.16304 15.5 5.5 15.5H1.75V21.75Z"
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
