
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-pause',
    shadow: true,
    styleUrl: 'coreproject-shape-pause.css',
})
export class CoreprojectShapePause {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 5H7.5V25H12.5V5Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.5 5H17.5V25H22.5V5Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Host>)
    }
}
