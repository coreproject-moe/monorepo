import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { is_number } from '$utils/is_number';

@Component({
    tag: 'coreproject-shape-align',
    shadow: true,
    styleUrl: 'coreproject-shape-align.css',
})
export class CoreprojectShapeAlign {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;
    svg_element: SVGElement;
    variant: 'center' | 'justify' | 'left' | 'right';

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
        if (this.variant === 'center') {
            return (
                <Host>
                    <svg ref={el => (this.svg_element = el as SVGElement)} viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_582_73)">
                            <path d="M24.5 12.5H9.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M28.25 7.5H5.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M28.25 17.5H5.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M24.5 22.5H9.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <filter id="filter0_d_582_73" x="-2" y="0" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_582_73" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_582_73" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </Host>
            );
        } else if (this.variant === 'justify') {
            return (
                <Host>
                    <svg ref={el => (this.svg_element = el as SVGElement)} viewBox="0 0 34 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_582_78)">
                            <path d="M28.25 12.5H5.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M28.25 7.5H5.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M28.25 17.5H5.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M28.25 22.5H5.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <filter id="filter0_d_582_78" x="-2" y="0" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="4" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_582_78" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_582_78" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </Host>
            );
        } else if (this.variant === 'left') {
            return (
                <Host>
                    <svg ref={el => (this.svg_element = el as SVGElement)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.25 12.5H3.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M26.25 7.5H3.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M26.25 17.5H3.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M21.25 22.5H3.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Host>
            );
        } else if (this.variant === 'right') {
            return (
                <Host>
                    <svg ref={el => (this.svg_element = el as SVGElement)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.25 12.5H8.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M26.25 7.5H3.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M26.25 17.5H3.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M26.25 22.5H8.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Host>
            );
        }
    }
}
