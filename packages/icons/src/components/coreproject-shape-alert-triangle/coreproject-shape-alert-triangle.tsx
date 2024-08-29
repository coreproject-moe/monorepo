
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-alert-triangle',
    shadow: true,
    styleUrl: 'coreproject-shape-alert-triangle.css',
})
export class CoreprojectShapeAlertTriangle {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_582_69)">
<rect x="4.5" y="0.5"   stroke="black" shape-rendering="crispEdges"/>
<path d="M16.8625 4.82501L6.27497 22.5C6.05668 22.878 5.94117 23.3066 5.93995 23.7432C5.93873 24.1797 6.05183 24.6089 6.268 24.9882C6.48417 25.3674 6.79587 25.6834 7.1721 25.9048C7.54833 26.1262 7.97596 26.2452 8.41247 26.25H29.5875C30.024 26.2452 30.4516 26.1262 30.8278 25.9048C31.2041 25.6834 31.5158 25.3674 31.7319 24.9882C31.9481 24.6089 32.0612 24.1797 32.06 23.7432C32.0588 23.3066 31.9433 22.878 31.725 22.5L21.1375 4.82501C20.9146 4.45764 20.6009 4.15391 20.2265 3.94312C19.8521 3.73232 19.4296 3.62158 19 3.62158C18.5703 3.62158 18.1479 3.73232 17.7735 3.94312C17.3991 4.15391 17.0853 4.45764 16.8625 4.82501V4.82501Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 11.25V16.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 21.25H19.0125" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_582_69" x="0" y="0"   filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_582_69"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_582_69" result="shape"/>
</filter>
</defs>
</svg>
</Host>)
    }
}
