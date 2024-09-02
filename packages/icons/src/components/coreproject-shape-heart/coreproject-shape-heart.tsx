import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-heart",
	shadow: true,
	styleUrl: "coreproject-shape-heart.css"
})
export class CoreprojectShapeHeart {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 30 27"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M26.0499 3.76234C25.4115 3.1236 24.6534 2.6169 23.8191 2.2712C22.9848 1.92549 22.0905 1.74756 21.1874 1.74756C20.2843 1.74756 19.39 1.92549 18.5557 2.2712C17.7214 2.6169 16.9634 3.1236 16.3249 3.76234L14.9999 5.08734L13.6749 3.76234C12.3853 2.47273 10.6362 1.74823 8.8124 1.74823C6.98861 1.74823 5.23952 2.47273 3.9499 3.76234C2.66029 5.05196 1.93579 6.80105 1.93579 8.62484C1.93579 10.4486 2.66029 12.1977 3.9499 13.4873L5.2749 14.8123L14.9999 24.5373L24.7249 14.8123L26.0499 13.4873C26.6886 12.8489 27.1953 12.0909 27.541 11.2565C27.8868 10.4222 28.0647 9.52795 28.0647 8.62484C28.0647 7.72173 27.8868 6.82747 27.541 5.99315C27.1953 5.15882 26.6886 4.40079 26.0499 3.76234V3.76234Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</Host>
		);
	}
}
