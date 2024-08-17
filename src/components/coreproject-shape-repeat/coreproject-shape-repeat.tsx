
import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-repeat',
    shadow: true,
    styleUrl: 'coreproject-shape-repeat.css',
})
export class CoreprojectShapeRepeat {
    @Prop() width: string|number;
    @Prop() height: string|number;
    @Prop() _style: string;

    render(){
        
        return(
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_583_449)">
<path d="M21.25 1.25L26.25 6.25L21.25 11.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.75 13.75V11.25C3.75 9.92392 4.27678 8.65215 5.21447 7.71447C6.15215 6.77678 7.42392 6.25 8.75 6.25H26.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.75 28.75L3.75 23.75L8.75 18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.25 16.25V18.75C26.25 20.0761 25.7232 21.3479 24.7855 22.2855C23.8479 23.2232 22.5761 23.75 21.25 23.75H3.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_583_449">
<rect   fill="white"/>
</clipPath>
</defs>
</svg>

            </Host>
        )
    
    }

}

