import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-log-in",
	shadow: true,
	styleUrl: "coreproject-shape-log-in.scss"
})
export class CoreprojectShapeLogIn {
	@Prop() width: string | number = 24;
	@Prop() height: string | number = 24;
	null;

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
					coreproject-icon-07=""
				>
					<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
					<polyline points="10 17 15 12 10 7"></polyline>
					<line x1="15" y1="12" x2="3" y2="12"></line>
				</svg>
			</Host>
		);
	}
}
