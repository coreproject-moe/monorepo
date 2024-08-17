
import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-rotate-cw',
    shadow: true,
    styleUrl: 'coreproject-shape-rotate-cw.css',
})
export class CoreprojectShapeRotateCw {
    @Prop() width: string|number;
    @Prop() height: string|number;
    @Prop() _style: string;

    render(){
        
        return(
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_583_457)">
<path d="M28.75 5V12.5H21.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.6124 18.75C24.7998 21.0499 23.2618 23.0234 21.23 24.3731C19.1983 25.7229 16.7829 26.3757 14.3479 26.2333C11.9128 26.0908 9.59004 25.1608 7.72954 23.5834C5.86904 22.0059 4.57163 19.8665 4.03281 17.4876C3.49398 15.1086 3.74295 12.619 4.74218 10.3939C5.74141 8.16871 7.43677 6.3286 9.57279 5.15082C11.7088 3.97304 14.1698 3.52139 16.5848 3.86395C18.9998 4.2065 21.2381 5.32469 22.9624 7.05002L28.7499 12.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_583_457">
<rect   fill="white"/>
</clipPath>
</defs>
</svg>

            </Host>
        )
    
    }

}

