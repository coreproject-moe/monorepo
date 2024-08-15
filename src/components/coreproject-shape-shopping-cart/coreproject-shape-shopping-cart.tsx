
import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-shopping-cart',
    shadow: true,
    styleUrl: 'coreproject-shape-shopping-cart.css',
})
export class CoreprojectShapeShoppingCart {

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
        if (this.svg_element && newValue) this.svg_element.setAttribute('height', newValue);
    }

    @Watch('width')
    watchWidth(newValue: string) {
        if (this.svg_element && newValue) this.svg_element.setAttribute('width', newValue);
    }

    render(){
        return(
            <Host>
                <svg ref={el => (this.svg_element = el as SVGElement)}   viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_583_483)" filter="url(#filter0_d_583_483)">
<path d="M15.25 27.5C15.9404 27.5 16.5 26.9404 16.5 26.25C16.5 25.5596 15.9404 25 15.25 25C14.5596 25 14 25.5596 14 26.25C14 26.9404 14.5596 27.5 15.25 27.5Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29 27.5C29.6904 27.5 30.25 26.9404 30.25 26.25C30.25 25.5596 29.6904 25 29 25C28.3096 25 27.75 25.5596 27.75 26.25C27.75 26.9404 28.3096 27.5 29 27.5Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.25 1.25H10.25L13.6 17.9875C13.7143 18.563 14.0274 19.0799 14.4844 19.4479C14.9415 19.8158 15.5134 20.0112 16.1 20H28.25C28.8366 20.0112 29.4085 19.8158 29.8656 19.4479C30.3226 19.0799 30.6357 18.563 30.75 17.9875L32.75 7.5H11.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_583_483" x="0" y="0"   filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_583_483"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_583_483" result="shape"/>
</filter>
<clipPath id="clip0_583_483">
<rect   fill="white" transform="translate(4)"/>
</clipPath>
</defs>
</svg>

            </Host>
        )
    }

}

    
