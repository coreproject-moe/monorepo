import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-logo-reddit",
	shadow: true,
	styleUrl: "coreproject-logo-reddit.scss"
})
export class CoreprojectLogoReddit {
	@Prop() width: string | number;
	@Prop() height: string | number;
	@Prop() _style: string;

	render() {
		return (
			<Host>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					height={this?.height}
					width={this?.width}
					part="svg"
					coreproject-style-0s=""
				>
					<g clip-path="url(#clip0_5206_8638)">
						<path
							d="M10.4985 13.1404C10.4985 12.5154 9.93393 12 9.24925 12C8.56456 12 8 12.5154 8 13.1404C8 13.4428 8.13162 13.7328 8.3659 13.9467C8.60018 14.1606 8.91793 14.2807 9.24925 14.2807C9.58057 14.2807 9.89832 14.1606 10.1326 13.9467C10.3669 13.7328 10.4985 13.4428 10.4985 13.1404ZM14.5105 15.739C13.97 16.2325 12.8168 16.4079 12 16.4079C11.1832 16.4079 10.03 16.2325 9.48949 15.739C9.46027 15.7105 9.42493 15.6877 9.38567 15.6722C9.34641 15.6566 9.30407 15.6486 9.26126 15.6486C9.21846 15.6486 9.17611 15.6566 9.13685 15.6722C9.09759 15.6877 9.06225 15.7105 9.03303 15.739C9.00175 15.7657 8.97681 15.798 8.95976 15.8338C8.94271 15.8696 8.93391 15.9083 8.93391 15.9474C8.93391 15.9864 8.94271 16.0251 8.95976 16.0609C8.97681 16.0968 9.00175 16.129 9.03303 16.1557C9.88589 16.9342 11.5195 17 12 17C12.4805 17 14.1141 16.9342 14.967 16.1557C14.9982 16.129 15.0232 16.0968 15.0402 16.0609C15.0573 16.0251 15.0661 15.9864 15.0661 15.9474C15.0661 15.9083 15.0573 15.8696 15.0402 15.8338C15.0232 15.798 14.9982 15.7657 14.967 15.739C14.8468 15.6294 14.6426 15.6294 14.5105 15.739ZM14.7508 12C14.0661 12 13.5015 12.5154 13.5015 13.1404C13.5015 13.7654 14.0661 14.2807 14.7508 14.2807C15.4354 14.2807 16 13.7654 16 13.1404C16 12.5154 15.4474 12 14.7508 12Z"
							fill="currentColor"
						/>
						<path
							d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM18.96 13.596C18.984 13.764 18.996 13.944 18.996 14.124C18.996 16.812 15.864 18.996 12 18.996C8.136 18.996 5.004 16.812 5.004 14.124C5.004 13.944 5.016 13.764 5.04 13.596C4.428 13.32 4.008 12.708 4.008 12C4.00622 11.6559 4.10616 11.3189 4.29527 11.0314C4.48438 10.744 4.75422 10.5188 5.07091 10.3841C5.38759 10.2495 5.737 10.2115 6.07523 10.2748C6.41347 10.3381 6.72545 10.4999 6.972 10.74C8.184 9.864 9.864 9.312 11.724 9.252L12.612 5.064C12.624 4.98 12.672 4.908 12.744 4.872C12.816 4.824 12.9 4.812 12.984 4.824L15.888 5.448C15.9865 5.2483 16.1366 5.07858 16.3228 4.95645C16.509 4.83433 16.7245 4.76424 16.9469 4.75347C17.1693 4.74269 17.3905 4.79162 17.5877 4.89517C17.7848 4.99873 17.9506 5.15314 18.068 5.34238C18.1853 5.53163 18.2499 5.74883 18.255 5.97144C18.2601 6.19405 18.2055 6.41398 18.0969 6.6084C17.9884 6.80282 17.8298 6.96465 17.6376 7.07712C17.4454 7.18959 17.2267 7.24859 17.004 7.248C16.332 7.248 15.792 6.72 15.756 6.06L13.152 5.508L12.36 9.252C14.196 9.312 15.84 9.876 17.04 10.74C17.224 10.5643 17.4441 10.431 17.685 10.3493C17.9258 10.2676 18.1817 10.2395 18.4345 10.267C18.6874 10.2945 18.9312 10.3769 19.1489 10.5084C19.3666 10.64 19.5529 10.8175 19.6948 11.0286C19.8367 11.2397 19.9308 11.4793 19.9705 11.7305C20.0101 11.9818 19.9944 12.2386 19.9244 12.4832C19.8544 12.7277 19.7318 12.954 19.5653 13.1462C19.3987 13.3385 19.1921 13.492 18.96 13.596Z"
							fill="currentColor"
						/>
					</g>
					<defs>
						<clipPath id="clip0_5206_8638">
							<rect width="24" height="24" fill="currentColor" />
						</clipPath>
					</defs>
				</svg>
			</Host>
		);
	}
}
