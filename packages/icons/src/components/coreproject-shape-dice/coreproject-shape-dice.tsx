import { Component, Host, h, Prop } from "@stencil/core";

@Component({
	tag: "coreproject-shape-dice",
	shadow: true,
	styleUrl: "coreproject-shape-dice.scss"
})
export class CoreprojectShapeDice {
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
					data-svg-scope-marker-J=""
				>
					<path
						d="M10.8398 0.302108C11.1924 0.104209 11.5926 0 12 0C12.4074 0 12.8076 0.104209 13.1602 0.302108L21.8444 5.1766C22.1959 5.37385 22.4876 5.65723 22.6904 5.99831C22.8933 6.33939 23 6.72618 23 7.11989V16.8801C22.9998 17.2736 22.893 17.6602 22.6902 18.0011C22.4873 18.3419 22.1957 18.6251 21.8444 18.8223L13.1602 23.6979C12.8076 23.8958 12.4074 24 12 24C11.5926 24 11.1924 23.8958 10.8398 23.6979L2.15558 18.8234C1.80414 18.6261 1.51238 18.3428 1.30956 18.0017C1.10673 17.6606 0.999979 17.2738 1 16.8801V7.11989C1.00018 6.72637 1.10703 6.33981 1.30985 5.99895C1.51266 5.65808 1.80431 5.37488 2.15558 5.17773L10.8398 0.302108ZM2.79474 7.61273C2.7067 7.56318 2.60674 7.53702 2.50494 7.53688C2.40315 7.53673 2.30311 7.56262 2.21493 7.61191C2.12674 7.66121 2.05352 7.73218 2.00264 7.81767C1.95177 7.90315 1.92504 8.00014 1.92516 8.09883V15.5857C1.92534 15.9792 2.03219 16.3658 2.23501 16.7067C2.43782 17.0475 2.72947 17.3307 3.08074 17.5279L11.2101 22.3081C11.2981 22.3576 11.398 22.3838 11.4997 22.384C11.6013 22.3842 11.7013 22.3584 11.7895 22.3092C11.8776 22.2601 11.9509 22.1892 12.0018 22.1039C12.0528 22.0186 12.0796 21.9217 12.0797 21.8231L11.9988 13.2944C11.9987 12.9009 11.8918 12.5143 11.689 12.1735C11.4862 11.8326 11.1945 11.5494 10.8433 11.3522L2.79474 7.61273ZM16.3618 4.72194C15.8083 4.41209 14.9098 4.41209 14.3563 4.72194C13.8028 5.03178 13.8028 5.53473 14.3563 5.84457C14.9098 6.15442 15.8083 6.15442 16.3618 5.84457C16.9153 5.53473 16.9153 5.03178 16.3618 4.72194ZM9.646 4.72194C9.09253 4.41209 8.194 4.41209 7.64053 4.72194C7.08705 5.03178 7.08705 5.53473 7.64053 5.84457C8.194 6.15442 9.09253 6.15442 9.646 5.84457C10.2006 5.53473 10.2006 5.03178 9.646 4.72194ZM17.7802 16.3165C18.4715 15.9292 19.0331 14.9873 19.0331 14.2116C19.0331 13.437 18.4715 13.1226 17.7802 13.5099C17.0878 13.8973 16.5262 14.8403 16.5262 15.6149C16.5262 16.3895 17.0889 16.7039 17.7802 16.3165ZM5.47526 12.2245C6.02874 12.5355 6.478 12.284 6.478 11.6632C6.478 11.0435 6.02874 10.2902 5.47526 9.97925C4.92179 9.6694 4.47253 9.92087 4.47253 10.5406C4.47253 11.1614 4.92179 11.9147 5.47526 12.2245ZM10.4889 18.3968C10.4889 19.0165 10.0385 19.268 9.48505 18.9581C8.93158 18.6483 8.48232 17.8939 8.48232 17.2742C8.48232 16.6545 8.93158 16.403 9.48505 16.7128C10.0385 17.0227 10.4889 17.7771 10.4889 18.3968ZM6.478 16.1538C6.478 16.7746 6.02874 17.0261 5.47526 16.7151C4.92179 16.4052 4.47253 15.6519 4.47253 15.0311C4.47253 14.4114 4.92179 14.16 5.47526 14.4698C6.02874 14.7808 6.478 15.5341 6.478 16.1538ZM10.4878 13.9085C10.4878 14.5293 10.0385 14.7808 9.48505 14.4698C8.93042 14.1611 8.48232 13.4067 8.48232 12.7858C8.48232 12.1673 8.93042 11.9158 9.48505 12.2245C10.0385 12.5355 10.4878 13.2899 10.4878 13.9085Z"
						fill="currentColor"
					/>
				</svg>
			</Host>
		);
	}
}
