
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-smile',
    shadow: true,
    styleUrl: 'coreproject-shape-smile.css',
})
export class CoreprojectShapeSmile {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_583_490)">
<path d="M18 27.5C24.9036 27.5 30.5 21.9036 30.5 15C30.5 8.09644 24.9036 2.5 18 2.5C11.0964 2.5 5.5 8.09644 5.5 15C5.5 21.9036 11.0964 27.5 18 27.5Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 17.5C13 17.5 14.875 20 18 20C21.125 20 23 17.5 23 17.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.25 11.25H14.2625" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.75 11.25H21.7625" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_583_490" x="-1" y="0"   filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_583_490"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_583_490" result="shape"/>
</filter>
</defs>
</svg>
</Host>)
    }
}
