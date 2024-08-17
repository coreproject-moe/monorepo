
import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-chevrons-down',
    shadow: true,
    styleUrl: 'coreproject-shape-chevrons-down.css',
})
export class CoreprojectShapeChevronsDown {
    @Prop() width: string|number;
    @Prop() height: string|number;
    @Prop() _style: string;

    render(){
        
        return(
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.75 16.25L15 22.5L21.25 16.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.75 7.5L15 13.75L21.25 7.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    
    }

}

