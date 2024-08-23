
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-speaker',
    shadow: true,
    styleUrl: 'coreproject-shape-speaker.css',
})
export class CoreprojectShapeSpeaker {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 32 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_583_495)">
<path d="M23.5 2.5H8.5C7.11929 2.5 6 3.61929 6 5V25C6 26.3807 7.11929 27.5 8.5 27.5H23.5C24.8807 27.5 26 26.3807 26 25V5C26 3.61929 24.8807 2.5 23.5 2.5Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 22.5C18.7614 22.5 21 20.2614 21 17.5C21 14.7386 18.7614 12.5 16 12.5C13.2386 12.5 11 14.7386 11 17.5C11 20.2614 13.2386 22.5 16 22.5Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 7.5H16.0125" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_583_495" x="-3" y="0"   filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_583_495"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_583_495" result="shape"/>
</filter>
</defs>
</svg>
</Host>)
    }
}
