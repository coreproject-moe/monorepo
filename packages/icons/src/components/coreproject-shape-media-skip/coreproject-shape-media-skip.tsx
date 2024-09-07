import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-media-skip",
	shadow: true,
	styleUrl: "coreproject-shape-media-skip.css"
})
export class CoreprojectShapeMediaSkip {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "fast-forward" | "rewind";

	componentWillLoad() {
		if (!["fast-forward", "rewind"].includes(this.variant))
			throw new Error(
				`'coreproject-shape-media-skip' (${this.variant}) not in ['fast-forward', 'rewind']`
			);
	}

	render() {
		return (
			<Host>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					height={this?.height}
					width={this?.width}
					part="svg"
					data-marker="7"
					class={this?.variant}
				>
					<polygon points="13 19 22 12 13 5 13 19"></polygon>
					<polygon points="2 19 11 12 2 5 2 19"></polygon>
				</svg>
			</Host>
		);
	}
}
