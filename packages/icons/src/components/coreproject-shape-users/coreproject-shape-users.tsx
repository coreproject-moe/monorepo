import { Component, Host, h, Prop } from "@stencil/core";
import { css_to_jsx } from "$utils/css_to_jsx";

@Component({
	tag: "coreproject-shape-users",
	shadow: true,
	styleUrl: "coreproject-shape-users.css"
})
export class CoreprojectShapeUsers {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 30 26"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					height={this?.height}
					width={this?.width}
					style={css_to_jsx(this?._style)}
				>
					<path
						d="M21.25 24.25V21.75C21.25 20.4239 20.7232 19.1521 19.7855 18.2145C18.8479 17.2768 17.5761 16.75 16.25 16.75H6.25C4.92392 16.75 3.65215 17.2768 2.71447 18.2145C1.77678 19.1521 1.25 20.4239 1.25 21.75V24.25"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M11.25 11.75C14.0114 11.75 16.25 9.51142 16.25 6.75C16.25 3.98858 14.0114 1.75 11.25 1.75C8.48858 1.75 6.25 3.98858 6.25 6.75C6.25 9.51142 8.48858 11.75 11.25 11.75Z"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M28.75 24.2501V21.7501C28.7492 20.6423 28.3804 19.5661 27.7017 18.6905C27.023 17.8149 26.0727 17.1896 25 16.9126"
						stroke="currentColor"
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M20 1.9126C21.0755 2.18797 22.0288 2.81347 22.7095 3.69049C23.3903 4.5675 23.7598 5.64613 23.7598 6.75635C23.7598 7.86656 23.3903 8.9452 22.7095 9.82221C22.0288 10.6992 21.0755 11.3247 20 11.6001"
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
