import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-logo-figma",
	shadow: true,
	styleUrl: "coreproject-logo-figma.scss"
})
export class CoreprojectLogoFigma {
	@Prop() width: string | number;
	@Prop() height: string | number;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					height={this?.height}
					width={this?.width}
					part="svg"
					coreproject-icon-N=""
				>
					<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
					<path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
					<path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
					<path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
					<path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
				</svg>
			</Host>
		);
	}
}
