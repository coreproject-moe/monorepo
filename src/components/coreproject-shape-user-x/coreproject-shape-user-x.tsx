
import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-user-x',
    shadow: true,
    styleUrl: 'coreproject-shape-user-x.css',
})
export class CoreprojectShapeUserX {
    @Prop() width: string|number;
    @Prop() height: string|number;
    @Prop() _style: string;

    render(){
        
        return(
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_583_582)">
<path d="M20 26.25V23.75C20 22.4239 19.4732 21.1521 18.5355 20.2145C17.5979 19.2768 16.3261 18.75 15 18.75H6.25C4.92392 18.75 3.65215 19.2768 2.71447 20.2145C1.77678 21.1521 1.25 22.4239 1.25 23.75V26.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.625 13.75C13.3864 13.75 15.625 11.5114 15.625 8.75C15.625 5.98858 13.3864 3.75 10.625 3.75C7.86358 3.75 5.625 5.98858 5.625 8.75C5.625 11.5114 7.86358 13.75 10.625 13.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.5 10L28.75 16.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.75 10L22.5 16.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_583_582">
<rect   fill="white"/>
</clipPath>
</defs>
</svg>

            </Host>
        )
    
    }

}

