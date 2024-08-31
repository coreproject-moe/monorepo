
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-search',
    shadow: true,
    styleUrl: 'coreproject-shape-search.css',
})
export class CoreprojectShapeSearch {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg" height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}>
<g filter="url(#filter0_d_5163_1328)">
<path d="M12.1667 15.8333C15.8486 15.8333 18.8333 12.8486 18.8333 9.16667C18.8333 5.48477 15.8486 2.5 12.1667 2.5C8.48477 2.5 5.5 5.48477 5.5 9.16667C5.5 12.8486 8.48477 15.8333 12.1667 15.8333Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.5 17.5L16.875 13.875" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_5163_1328" x="-1" y="0" width="28" height="28" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5163_1328"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5163_1328" result="shape"/>
</filter>
</defs>
</svg>
</Host>)
    }
}
