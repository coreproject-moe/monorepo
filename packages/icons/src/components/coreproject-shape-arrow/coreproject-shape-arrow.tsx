
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-arrow',
    shadow: true,
    styleUrl: 'coreproject-shape-arrow.css',
})
export class CoreprojectShapeArrow {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg" height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}>
<g filter="url(#filter0_d_582_108)">
<path d="M15 23.75V6.25" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.25 15L15 6.25L23.75 15" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_582_108" x="-4" y="0" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_582_108"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_582_108" result="shape"/>
</filter>
</defs>
</svg>
</Host>)
    }
}
