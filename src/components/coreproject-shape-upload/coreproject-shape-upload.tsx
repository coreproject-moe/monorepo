import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-upload',
    shadow: true,
    styleUrl: 'coreproject-shape-upload.css',
})
export class CoreprojectShapeUpload {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    @Prop() variant!: 'arrow' | 'cloud';

    render() {
        if (this.variant === 'arrow') {
            return (
                <Host>
                    <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M26.25 18.75V23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V18.75"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path d="M21.25 10L15 3.75L8.75 10" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M15 3.75V18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Host>
            );
        } else if (this.variant === 'cloud') {
            return (
                <Host>
                    <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_583_561)">
                            <path d="M20 20L15 15L10 20" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15 15V26.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M25.4873 22.9874C26.7065 22.3227 27.6696 21.271 28.2247 19.9981C28.7797 18.7253 28.8951 17.3039 28.5526 15.9582C28.2101 14.6125 27.4292 13.4192 26.3332 12.5667C25.2371 11.7141 23.8884 11.2508 22.4998 11.2499H20.9248C20.5465 9.78641 19.8413 8.42778 18.8623 7.2761C17.8832 6.12442 16.6559 5.20967 15.2725 4.60062C13.889 3.99156 12.3855 3.70406 10.875 3.75971C9.36443 3.81537 7.88616 4.21273 6.5513 4.92194C5.21644 5.63115 4.05972 6.63374 3.16811 7.85434C2.27649 9.07493 1.67319 10.4818 1.40355 11.9691C1.13392 13.4564 1.20496 14.9855 1.61134 16.4414C2.01773 17.8973 2.74888 19.2422 3.74983 20.3749"
                                stroke="white"
                                stroke-
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path d="M20 20L15 15L10 20" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_583_561">
                                <rect fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </Host>
            );
        }
    }
}
