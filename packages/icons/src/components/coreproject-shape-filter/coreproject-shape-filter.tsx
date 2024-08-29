
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-filter',
    shadow: true,
    styleUrl: 'coreproject-shape-filter.css',
})
export class CoreprojectShapeFilter {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.5 3.75H2.5L12.5 15.575V23.75L17.5 26.25V15.575L27.5 3.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Host>)
    }
}
