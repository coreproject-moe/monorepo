
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-hash',
    shadow: true,
    styleUrl: 'coreproject-shape-hash.css',
})
export class CoreprojectShapeHash {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 11.25H25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 18.75H25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 3.75L10 26.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 3.75L17.5 26.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Host>)
    }
}
