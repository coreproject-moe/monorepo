import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreicons-shape-logo",
	shadow: true,
	styleUrl: "coreicons-shape-logo.scss"
})
export class CoreiconsShapeLogo {
	@Prop() width?: string | number;
	@Prop() height?: string | number;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 25 25"
					fill="none"
					height={this?.height}
					width={this?.width}
					part="svg"
					coreproject-icon-09=""
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M12.5 24.103C16.6421 24.103 20 20.7452 20 16.603C20 12.4609 16.6421 9.10303 12.5 9.10303C8.35786 9.10303 5 12.4609 5 16.603C5 20.7452 8.35786 24.103 12.5 24.103ZM12.4974 19.9372C14.3383 19.9372 15.8307 18.4448 15.8307 16.6038C15.8307 14.7629 14.3383 13.2705 12.4974 13.2705C10.6564 13.2705 9.16406 14.7629 9.16406 16.6038C9.16406 18.4448 10.6564 19.9372 12.4974 19.9372Z"
						fill="#7569E1"
					/>
					<circle cx="12.5" cy="2.5" r="2.5" fill="#F2C94C" />
				</svg>
			</Host>
		);
	}
}