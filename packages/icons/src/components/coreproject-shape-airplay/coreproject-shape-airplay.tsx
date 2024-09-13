import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-airplay",
	shadow: true,
	styleUrl: "coreproject-shape-airplay.scss"
})
export class CoreprojectShapeAirplay {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

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
					data-svg-scope-marker-t=""
				>
					<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path>
					<polygon points="12 15 17 21 7 21 12 15"></polygon>
				</svg>
			</Host>
		);
	}
}
