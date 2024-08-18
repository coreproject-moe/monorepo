import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-logo-github',
    shadow: true,
    styleUrl: 'coreproject-logo-github.css',
})
export class CoreprojectLogoGithub {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;

    render() {
        return (
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_582_302)">
                        <path
                            d="M20 27.4998V22.6623C20.0469 22.0663 19.9664 21.4671 19.7638 20.9045C19.5612 20.342 19.2412 19.8291 18.825 19.3998C22.75 18.9623 26.875 17.4748 26.875 10.6498C26.8747 8.90458 26.2034 7.2263 25 5.9623C25.5698 4.43543 25.5295 2.74774 24.8875 1.2498C24.8875 1.2498 23.4125 0.8123 20 3.0998C17.135 2.32333 14.115 2.32333 11.25 3.0998C7.8375 0.8123 6.3625 1.2498 6.3625 1.2498C5.72047 2.74774 5.68018 4.43543 6.25 5.9623C5.03766 7.23567 4.36565 8.92913 4.375 10.6873C4.375 17.4623 8.5 18.9498 12.425 19.4373C12.0137 19.8623 11.6966 20.3691 11.4941 20.9247C11.2917 21.4803 11.2085 22.0724 11.25 22.6623V27.4998M11.25 23.7498C5 25.6248 5 20.6248 2.5 19.9998L11.25 23.7498Z"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_582_302">
                            <rect fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </Host>
        );
    }
}
