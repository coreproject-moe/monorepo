
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-fast-forward',
    shadow: true,
    styleUrl: 'coreproject-shape-fast-forward.css',
})
export class CoreprojectShapeFastForward {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}>
<path d="M16.25 23.75L27.5 15L16.25 6.25V23.75Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 23.75L13.75 15L2.5 6.25V23.75Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Host>)
    }
}
