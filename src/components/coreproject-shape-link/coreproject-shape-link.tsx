import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-link',
    shadow: true,
    styleUrl: 'coreproject-shape-link.css',
})
export class CoreprojectShapeLink {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    @Prop() variant: 'tilted' | 'horizontal' = 'tilted';

    render() {
        if (this.variant === 'tilted') {
            return (
                <Host>
                    <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.5 16.25C13.0368 16.9676 13.7217 17.5614 14.5082 17.9911C15.2947 18.4208 16.1644 18.6764 17.0583 18.7404C17.9522 18.8044 18.8495 18.6754 19.6892 18.3622C20.5289 18.049 21.2914 17.5588 21.925 16.925L25.675 13.175C26.8135 11.9962 27.4435 10.4174 27.4292 8.7787C27.415 7.13997 26.7577 5.57239 25.5989 4.41359C24.4401 3.25479 22.8725 2.59748 21.2338 2.58324C19.595 2.569 18.0163 3.19897 16.8375 4.33746L14.6875 6.47496"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M17.4998 13.75C16.9629 13.0324 16.2781 12.4386 15.4916 12.0089C14.7051 11.5792 13.8354 11.3236 12.9414 11.2596C12.0475 11.1956 11.1503 11.3246 10.3106 11.6378C9.47088 11.951 8.70837 12.4412 8.07476 13.075L4.32476 16.825C3.18627 18.0038 2.55631 19.5826 2.57055 21.2213C2.58479 22.86 3.24209 24.4276 4.4009 25.5864C5.5597 26.7452 7.12727 27.4025 8.766 27.4168C10.4047 27.431 11.9835 26.801 13.1623 25.6625L15.2998 23.525"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </Host>
            );
        } else if (this.variant === 'horizontal') {
            return (
                <Host>
                    <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_582_344)">
                            <path
                                d="M18.75 8.75H22.5C23.3208 8.75 24.1335 8.91166 24.8918 9.22575C25.6501 9.53984 26.3391 10.0002 26.9194 10.5806C27.4998 11.1609 27.9602 11.8499 28.2742 12.6082C28.5883 13.3665 28.75 14.1792 28.75 15C28.75 15.8208 28.5883 16.6335 28.2742 17.3918C27.9602 18.1501 27.4998 18.8391 26.9194 19.4194C26.3391 19.9998 25.6501 20.4602 24.8918 20.7742C24.1335 21.0883 23.3208 21.25 22.5 21.25H18.75M11.25 21.25H7.5C6.67924 21.25 5.86651 21.0883 5.10823 20.7742C4.34994 20.4602 3.66095 19.9998 3.08058 19.4194C1.90848 18.2473 1.25 16.6576 1.25 15C1.25 13.3424 1.90848 11.7527 3.08058 10.5806C4.25269 9.40848 5.8424 8.75 7.5 8.75H11.25"
                                stroke="white"
                                stroke-
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path d="M10 15H20" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_582_344">
                                <rect fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </Host>
            );
        }
    }
}
