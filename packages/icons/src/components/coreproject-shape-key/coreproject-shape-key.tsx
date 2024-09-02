import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-key",
	shadow: true,
	styleUrl: "coreproject-shape-key.css"
})
export class CoreprojectShapeKey {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 28 27"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M18.3751 8.375L22.7501 4M25.2501 1.5L22.7501 4L25.2501 1.5ZM13.2376 13.5125C13.883 14.1493 14.3961 14.9075 14.7473 15.7435C15.0985 16.5794 15.2808 17.4766 15.2839 18.3833C15.2869 19.29 15.1106 20.1884 14.765 21.0266C14.4194 21.8649 13.9114 22.6265 13.2703 23.2677C12.6291 23.9088 11.8675 24.4168 11.0292 24.7624C10.191 25.108 9.2926 25.2843 8.38589 25.2813C7.47918 25.2782 6.58203 25.0959 5.74609 24.7447C4.91015 24.3935 4.15193 23.8804 3.5151 23.235C2.26276 21.9384 1.5698 20.2017 1.58546 18.3991C1.60113 16.5965 2.32417 14.8722 3.59885 13.5975C4.87353 12.3228 6.59786 11.5998 8.40047 11.5841C10.2031 11.5685 11.9397 12.2614 13.2363 13.5138L13.2376 13.5125ZM13.2376 13.5125L18.3751 8.375L13.2376 13.5125ZM18.3751 8.375L22.1251 12.125L26.5001 7.75L22.7501 4L18.3751 8.375Z"
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
