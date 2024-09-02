import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-box",
	shadow: true,
	styleUrl: "coreproject-shape-box.css"
})
export class CoreprojectShapeBox {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 26 29"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M24.25 18.9999V8.99988C24.2496 8.56147 24.1338 8.13089 23.9144 7.75133C23.695 7.37177 23.3797 7.05658 23 6.83738L14.25 1.83738C13.87 1.61796 13.4388 1.50244 13 1.50244C12.5612 1.50244 12.13 1.61796 11.75 1.83738L3 6.83738C2.62033 7.05658 2.30498 7.37177 2.08558 7.75133C1.86618 8.13089 1.75045 8.56147 1.75 8.99988V18.9999C1.75045 19.4383 1.86618 19.8689 2.08558 20.2484C2.30498 20.628 2.62033 20.9432 3 21.1624L11.75 26.1624C12.13 26.3818 12.5612 26.4973 13 26.4973C13.4388 26.4973 13.87 26.3818 14.25 26.1624L23 21.1624C23.3797 20.9432 23.695 20.628 23.9144 20.2484C24.1338 19.8689 24.2496 19.4383 24.25 18.9999Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M2.0874 7.7002L12.9999 14.0127L23.9124 7.7002"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M13 26.6V14"
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
