import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-bell",
	shadow: true,
	styleUrl: "coreproject-shape-bell.scss"
})
export class CoreprojectShapeBell {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "on" | "off";

	componentWillLoad() {
		if (!["on", "off"].includes(this.variant))
			throw new Error(`'coreproject-shape-bell' (${this.variant}) not in ['on', 'off']`);
	}

	render() {
		if (this.variant === "on") {
			return (
				<Host>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						height={this?.height}
						width={this?.width}
						part="svg"
						data-marker="a"
					>
						<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
						<path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
					</svg>
				</Host>
			);
		} else if (this.variant === "off") {
			return (
				<Host>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
						height={this?.height}
						width={this?.width}
						part="svg"
						data-marker="a"
					>
						<path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
						<path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path>
						<path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path>
						<path d="M18 8a6 6 0 0 0-9.33-5"></path>
						<line x1="1" y1="1" x2="23" y2="23"></line>
					</svg>
				</Host>
			);
		}
	}
}
