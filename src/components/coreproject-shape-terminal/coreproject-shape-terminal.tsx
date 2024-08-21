
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-terminal',
    shadow: true,
    styleUrl: 'coreproject-shape-terminal.css',
})
export class CoreprojectShapeTerminal {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21.25L12.5 13.75L5 6.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 23.75H25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Host>)
    }
}
