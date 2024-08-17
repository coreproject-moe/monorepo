import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-bell',
    shadow: true,
    styleUrl: 'coreproject-shape-bell.css',
})
export class CoreprojectShapeBell {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;

    render() {
        if (this.variant === 'on') {
            return (
                <Host>
                    <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M22.5 10C22.5 8.01088 21.7098 6.10322 20.3033 4.6967C18.8968 3.29018 16.9891 2.5 15 2.5C13.0109 2.5 11.1032 3.29018 9.6967 4.6967C8.29018 6.10322 7.5 8.01088 7.5 10C7.5 18.75 3.75 21.25 3.75 21.25H26.25C26.25 21.25 22.5 18.75 22.5 10Z"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M17.1624 26.25C16.9426 26.6288 16.6272 26.9433 16.2477 27.1619C15.8682 27.3805 15.4379 27.4956 14.9999 27.4956C14.5619 27.4956 14.1316 27.3805 13.7521 27.1619C13.3726 26.9433 13.0572 26.6288 12.8374 26.25"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </Host>
            );
        } else if (this.variant === 'off') {
            return (
                <Host>
                    <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_582_130)">
                            <path
                                d="M17.1624 26.25C16.9426 26.6288 16.6272 26.9433 16.2477 27.1619C15.8682 27.3805 15.4379 27.4956 14.9999 27.4956C14.5619 27.4956 14.1316 27.3805 13.7521 27.1619C13.3726 26.9433 13.0572 26.6288 12.8374 26.25"
                                stroke="white"
                                stroke-
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path d="M23.2874 16.25C22.7313 14.2143 22.4662 12.1101 22.4999 10" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M7.825 7.8252C7.60783 8.52971 7.49826 9.26297 7.5 10.0002C7.5 18.7502 3.75 21.2502 3.75 21.2502H21.25"
                                stroke="white"
                                stroke-
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                d="M22.4999 9.9999C22.5019 8.64123 22.1348 7.30753 21.4378 6.14126C20.7408 4.975 19.7401 4.01997 18.5426 3.3782C17.345 2.73643 15.9956 2.43202 14.6385 2.49748C13.2814 2.56295 11.9676 2.99583 10.8374 3.7499"
                                stroke="white"
                                stroke-
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path d="M1.25 1.25L28.75 28.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_582_130">
                                <rect fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </Host>
            );
        }
    }
}
