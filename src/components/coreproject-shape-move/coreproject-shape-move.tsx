
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-move',
    shadow: true,
    styleUrl: 'coreproject-shape-move.css',
})
export class CoreprojectShapeMove {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    


    render(){
        
        return(
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.25 11.25L2.5 15L6.25 18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 6.25L15 2.5L18.75 6.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 23.75L15 27.5L11.25 23.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.75 11.25L27.5 15L23.75 18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 15H27.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 2.5V27.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    
    }
}
