import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-unlock",
	shadow: true,
	styleUrl: "coreproject-shape-unlock.scss"
})
export class CoreprojectShapeUnlock {
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
					data-svg-scope-marker-0N=""
				>
					<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
					<path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
				</svg>
			</Host>
		);
	}
}
