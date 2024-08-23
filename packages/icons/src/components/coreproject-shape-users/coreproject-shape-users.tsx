import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

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
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_583_587)">
                        <path
                            d="M21.25 26.25V23.75C21.25 22.4239 20.7232 21.1521 19.7855 20.2145C18.8479 19.2768 17.5761 18.75 16.25 18.75H6.25C4.92392 18.75 3.65215 19.2768 2.71447 20.2145C1.77678 21.1521 1.25 22.4239 1.25 23.75V26.25"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M11.25 13.75C14.0114 13.75 16.25 11.5114 16.25 8.75C16.25 5.98858 14.0114 3.75 11.25 3.75C8.48858 3.75 6.25 5.98858 6.25 8.75C6.25 11.5114 8.48858 13.75 11.25 13.75Z"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M28.75 26.2501V23.7501C28.7492 22.6423 28.3804 21.5661 27.7017 20.6905C27.023 19.8149 26.0727 19.1896 25 18.9126"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M20 3.9126C21.0755 4.18797 22.0288 4.81347 22.7095 5.69049C23.3903 6.5675 23.7598 7.64613 23.7598 8.75635C23.7598 9.86656 23.3903 10.9452 22.7095 11.8222C22.0288 12.6992 21.0755 13.3247 20 13.6001"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_583_587">
                            <rect fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </Host>
        );
    }
}
