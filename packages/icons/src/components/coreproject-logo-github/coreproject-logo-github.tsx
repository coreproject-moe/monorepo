import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-logo-github",
	shadow: true,
	styleUrl: "coreproject-logo-github.scss"
})
export class CoreprojectLogoGithub {
	@Prop() width: string | number = 24;
	@Prop() height: string | number = 24;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					height={this.height}
					width={this.width}
					part="svg"
					coreproject-icon-T=""
				>
					<g clip-path="url(#clip0_5208_6736)">
						<path
							d="M12 0C10.4241 0 8.86371 0.318095 7.4078 0.936124C5.95189 1.55415 4.62902 2.46001 3.51472 3.60198C1.26428 5.90829 0 9.03631 0 12.2979C0 17.7336 3.444 22.3453 8.208 23.981C8.808 24.0793 9 23.6981 9 23.3661V21.2877C5.676 22.0256 4.968 19.6398 4.968 19.6398C4.416 18.2132 3.636 17.832 3.636 17.832C2.544 17.0695 3.72 17.0941 3.72 17.0941C4.92 17.1802 5.556 18.3608 5.556 18.3608C6.6 20.2301 8.364 19.6767 9.048 19.3815C9.156 18.5822 9.468 18.0411 9.804 17.7336C7.14 17.4262 4.344 16.3685 4.344 11.683C4.344 10.318 4.8 9.22344 5.58 8.35029C5.46 8.04284 5.04 6.76386 5.7 5.10364C5.7 5.10364 6.708 4.77159 9 6.35803C9.948 6.08747 10.98 5.9522 12 5.9522C13.02 5.9522 14.052 6.08747 15 6.35803C17.292 4.77159 18.3 5.10364 18.3 5.10364C18.96 6.76386 18.54 8.04284 18.42 8.35029C19.2 9.22344 19.656 10.318 19.656 11.683C19.656 16.3808 16.848 17.4139 14.172 17.7213C14.604 18.1025 15 18.8527 15 19.9964V23.3661C15 23.6981 15.192 24.0916 15.804 23.981C20.568 22.333 24 17.7336 24 12.2979C24 10.6829 23.6896 9.08376 23.0866 7.59171C22.4835 6.09966 21.5996 4.74395 20.4853 3.60198C19.371 2.46001 18.0481 1.55415 16.5922 0.936124C15.1363 0.318095 13.5759 0 12 0Z"
							fill="currentColor"
						/>
					</g>
					<defs>
						<clipPath id="clip0_5208_6736">
							<rect width="24" height="24" fill="currentColor" />
						</clipPath>
					</defs>
				</svg>
			</Host>
		);
	}
}
