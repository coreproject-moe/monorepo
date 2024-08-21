
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-mouse-pointer',
    shadow: true,
    styleUrl: 'coreproject-shape-mouse-pointer.css',
})
export class CoreprojectShapeMousePointer {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    


    render(){
        
        return(
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 3.75L12.5875 24.9625L15.725 15.725L24.9625 12.5875L3.75 3.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.25 16.25L23.75 23.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    
    }
}
