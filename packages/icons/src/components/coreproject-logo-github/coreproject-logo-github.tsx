import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-logo-github",
	shadow: true,
	styleUrl: "coreproject-logo-github.css"
})
export class CoreprojectLogoGithub {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 28 29"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M19 27.4998V22.6623C19.0469 22.0663 18.9664 21.4671 18.7638 20.9045C18.5612 20.342 18.2412 19.8291 17.825 19.3998C21.75 18.9623 25.875 17.4748 25.875 10.6498C25.8747 8.90458 25.2034 7.2263 24 5.9623C24.5698 4.43543 24.5295 2.74774 23.8875 1.2498C23.8875 1.2498 22.4125 0.8123 19 3.0998C16.135 2.32333 13.115 2.32333 10.25 3.0998C6.8375 0.8123 5.3625 1.2498 5.3625 1.2498C4.72047 2.74774 4.68018 4.43543 5.25 5.9623C4.03766 7.23567 3.36565 8.92913 3.375 10.6873C3.375 17.4623 7.5 18.9498 11.425 19.4373C11.0137 19.8623 10.6966 20.3691 10.4941 20.9247C10.2917 21.4803 10.2085 22.0724 10.25 22.6623V27.4998M10.25 23.7498C4 25.6248 4 20.6248 1.5 19.9998L10.25 23.7498Z"
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
