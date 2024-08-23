
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-log-in',
    shadow: true,
    styleUrl: 'coreproject-shape-log-in.css',
})
export class CoreprojectShapeLogIn {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.75 3.75H23.75C24.413 3.75 25.0489 4.01339 25.5178 4.48223C25.9866 4.95107 26.25 5.58696 26.25 6.25V23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 21.25L18.75 15L12.5 8.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 15H3.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Host>)
    }
}
