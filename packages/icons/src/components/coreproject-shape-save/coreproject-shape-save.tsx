
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-save',
    shadow: true,
    styleUrl: 'coreproject-shape-save.css',
})
export class CoreprojectShapeSave {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg" height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}>
<g filter="url(#filter0_d_583_460)">
<path d="M25.75 26.25H8.25C7.58696 26.25 6.95107 25.9866 6.48223 25.5178C6.01339 25.0489 5.75 24.413 5.75 23.75V6.25C5.75 5.58696 6.01339 4.95107 6.48223 4.48223C6.95107 4.01339 7.58696 3.75 8.25 3.75H22L28.25 10V23.75C28.25 24.413 27.9866 25.0489 27.5178 25.5178C27.0489 25.9866 26.413 26.25 25.75 26.25Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.25 26.25V16.25H10.75V26.25" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.75 3.75V10H20.75" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_583_460" x="-2" y="0" width="38" height="38" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_583_460"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_583_460" result="shape"/>
</filter>
</defs>
</svg>
</Host>)
    }
}
