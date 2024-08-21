
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-star',
    shadow: true,
    styleUrl: 'coreproject-shape-star.css',
})
export class CoreprojectShapeStar {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        
        return(
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_583_499)">
<path d="M18 2.5L21.8625 10.325L30.5 11.5875L24.25 17.675L25.725 26.275L18 22.2125L10.275 26.275L11.75 17.675L5.5 11.5875L14.1375 10.325L18 2.5Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_583_499" x="-1" y="0"   filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_583_499"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_583_499" result="shape"/>
</filter>
</defs>
</svg>

            </Host>
        )
    
    }
}
