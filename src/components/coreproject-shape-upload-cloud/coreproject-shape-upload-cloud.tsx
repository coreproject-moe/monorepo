import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { is_number } from '$utils/is_number';

@Component({
    tag: 'coreproject-shape-upload-cloud',
    shadow: true,
    styleUrl: 'coreproject-shape-upload-cloud.css',
})
export class CoreprojectShapeUploadCloud {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;
    svg_element: SVGElement;

    @Watch('_style')
    watch_Style(newValue: string) {
        if (this.svg_element && newValue) this.svg_element.setAttribute('style', newValue);
    }

    @Watch('height')
    watchHeight(newValue: string) {
        if (!is_number(newValue)) throw new Error(`height:${newValue} is not a valid number or a string of number`);

        if (this.svg_element && newValue) this.svg_element.setAttribute('height', newValue);
    }

    @Watch('width')
    watchWidth(newValue: string) {
        if (!is_number(newValue)) throw new Error(`width:${newValue} is not a valid number or a string of number`);

        if (this.svg_element && newValue) this.svg_element.setAttribute('width', newValue);
    }

    render() {
        return (
            <Host>
                <svg ref={el => (this.svg_element = el as SVGElement)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
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