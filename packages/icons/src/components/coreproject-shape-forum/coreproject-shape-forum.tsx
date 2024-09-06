import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-forum",
	shadow: true,
	styleUrl: "coreproject-shape-forum.css"
})
export class CoreprojectShapeForum {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
					data-marker="Q"
				>
					<g clip-path="url(#clip0_5206_8612)">
						<path
							d="M21.6 4.8H20.9C20.6239 4.8 20.4 5.02386 20.4 5.3V14.4C20.4 15.06 19.86 15.6 19.2 15.6H5.3C5.02386 15.6 4.8 15.8239 4.8 16.1V16.8C4.8 18.12 5.88 19.2 7.2 19.2H18.9929C19.1255 19.2 19.2527 19.2527 19.3464 19.3464L23.1464 23.1464C23.4614 23.4614 24 23.2383 24 22.7929V7.2C24 5.88 22.92 4.8 21.6 4.8ZM18 10.8V2.4C18 1.08 16.92 0 15.6 0H2.4C1.08 0 0 1.08 0 2.4V16.7929C0 17.2383 0.538571 17.4614 0.853553 17.1464L4.65355 13.3464C4.74732 13.2527 4.8745 13.2 5.00711 13.2H15.6C16.92 13.2 18 12.12 18 10.8Z"
							fill="currentColor"
						/>
					</g>
					<defs>
						<clipPath id="clip0_5206_8612">
							<rect width="24" height="24" fill="currentColor" />
						</clipPath>
					</defs>
				</svg>
			</Host>
		);
	}
}
