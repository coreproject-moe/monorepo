import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-map-pin",
	shadow: true,
	styleUrl: "coreproject-shape-map-pin.scss"
})
export class CoreprojectShapeMapPin {
	@Prop() width: string | number = 24;
	@Prop() height: string | number = 24;

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
					height={this.height}
					width={this.width}
					part="svg"
					coreproject-icon-0b=""
				>
					<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
					<circle cx="12" cy="10" r="3"></circle>
				</svg>
			</Host>
		);
	}
}
