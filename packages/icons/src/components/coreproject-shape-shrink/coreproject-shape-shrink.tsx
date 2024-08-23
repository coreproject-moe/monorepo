
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-shrink',
    shadow: true,
    styleUrl: 'coreproject-shape-shrink.css',
})
export class CoreprojectShapeShrink {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 17.5H12.5V25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25 12.5H17.5V5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 12.5L26.25 3.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.75 26.25L12.5 17.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Host>)
    }
}
