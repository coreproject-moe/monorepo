
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-list',
    shadow: true,
    styleUrl: 'coreproject-shape-list.css',
})
export class CoreprojectShapeList {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        
        return(
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 7.5H26.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 15H26.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 22.5H26.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.75 7.5H3.7625" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.75 15H3.7625" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.75 22.5H3.7625" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    
    }
}
