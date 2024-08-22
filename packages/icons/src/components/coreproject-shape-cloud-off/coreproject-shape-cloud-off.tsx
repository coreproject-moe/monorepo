
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-cloud-off',
    shadow: true,
    styleUrl: 'coreproject-shape-cloud-off.css',
})
export class CoreprojectShapeCloudOff {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_582_184)">
<path d="M6.24999 6.25C4.29758 7.32955 2.76225 9.03098 1.88822 11.0836C1.0142 13.1363 0.85168 15.4223 1.42652 17.5779C2.00136 19.7336 3.28055 21.6351 5.06059 22.98C6.84063 24.3249 9.01929 25.0359 11.25 25H22.5C23.2247 24.9991 23.9438 24.8723 24.625 24.625M28.2625 21.1875C28.6652 20.2366 28.8261 19.2008 28.7307 18.1726C28.6353 17.1443 28.2866 16.1558 27.7158 15.2952C27.145 14.4347 26.3698 13.729 25.4597 13.2412C24.5495 12.7534 23.5326 12.4988 22.5 12.5H20.925C20.4147 10.4906 19.2926 8.68948 17.7138 7.34582C16.135 6.00216 14.1776 5.18242 12.1125 5L28.2625 21.1875Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.25 1.25L28.75 28.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_582_184">
<rect   fill="white"/>
</clipPath>
</defs>
</svg>
</Host>)
    }
}
