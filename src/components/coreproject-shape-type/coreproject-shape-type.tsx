
import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-type',
    shadow: true,
    styleUrl: 'coreproject-shape-type.css',
})
export class CoreprojectShapeType {
    @Prop() width: string|number;
    @Prop() height: string|number;
    @Prop() _style: string;

    render(){
        
        return(
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 8.75V5H25V8.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 25H18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 5V25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    
    }

}

