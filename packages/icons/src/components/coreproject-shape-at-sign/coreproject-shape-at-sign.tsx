import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-at-sign",
	shadow: true,
	styleUrl: "coreproject-shape-at-sign.css"
})
export class CoreprojectShapeAtSign {
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
						d="M14 19C16.7614 19 19 16.7614 19 14C19 11.2386 16.7614 9 14 9C11.2386 9 9 11.2386 9 14C9 16.7614 11.2386 19 14 19Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M19 9.0002V15.2502C19 16.2448 19.3951 17.1986 20.0984 17.9019C20.8016 18.6051 21.7555 19.0002 22.75 19.0002C23.7446 19.0002 24.6984 18.6051 25.4017 17.9019C26.1049 17.1986 26.5 16.2448 26.5 15.2502V14.0002C26.4998 11.179 25.5453 8.4408 23.7916 6.23087C22.0379 4.02093 19.5882 2.46923 16.8408 1.82807C14.0934 1.18691 11.2099 1.494 8.6592 2.69941C6.10846 3.90482 4.04051 5.93765 2.79158 8.46735C1.54266 10.9971 1.18622 13.8749 1.78022 16.6328C2.37422 19.3908 3.88373 21.8667 6.0633 23.658C8.24287 25.4493 10.9643 26.4506 13.7851 26.4991C16.6059 26.5476 19.3601 25.6405 21.6 23.9252"
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
