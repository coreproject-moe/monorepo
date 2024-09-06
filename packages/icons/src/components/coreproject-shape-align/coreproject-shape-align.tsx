import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-align",
	shadow: true,
	styleUrl: "coreproject-shape-align.css"
})
export class CoreprojectShapeAlign {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;
	@Prop() variant!: "center" | "justify" | "left" | "right";

	render() {
		if (this.variant === "center") {
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
						style={css_to_jsx(this?._style)}
						data-marker="8"
					>
						<line x1="18" y1="10" x2="6" y2="10"></line>
						<line x1="21" y1="6" x2="3" y2="6"></line>
						<line x1="21" y1="14" x2="3" y2="14"></line>
						<line x1="18" y1="18" x2="6" y2="18"></line>
					</svg>
				</Host>
			);
		} else if (this.variant === "justify") {
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
						style={css_to_jsx(this?._style)}
						data-marker="8"
					>
						<line x1="21" y1="10" x2="3" y2="10"></line>
						<line x1="21" y1="6" x2="3" y2="6"></line>
						<line x1="21" y1="14" x2="3" y2="14"></line>
						<line x1="21" y1="18" x2="3" y2="18"></line>
					</svg>
				</Host>
			);
		} else if (this.variant === "left") {
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
						style={css_to_jsx(this?._style)}
						data-marker="8"
					>
						<line x1="17" y1="10" x2="3" y2="10"></line>
						<line x1="21" y1="6" x2="3" y2="6"></line>
						<line x1="21" y1="14" x2="3" y2="14"></line>
						<line x1="17" y1="18" x2="3" y2="18"></line>
					</svg>
				</Host>
			);
		} else if (this.variant === "right") {
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
						style={css_to_jsx(this?._style)}
						data-marker="8"
					>
						<line x1="21" y1="10" x2="7" y2="10"></line>
						<line x1="21" y1="6" x2="3" y2="6"></line>
						<line x1="21" y1="14" x2="3" y2="14"></line>
						<line x1="21" y1="18" x2="7" y2="18"></line>
					</svg>
				</Host>
			);
		}
	}
}
