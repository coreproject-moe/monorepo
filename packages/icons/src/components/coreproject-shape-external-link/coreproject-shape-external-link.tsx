
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-external-link',
    shadow: true,
    styleUrl: 'coreproject-shape-external-link.css',
})
export class CoreprojectShapeExternalLink {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.5 16.25V23.75C22.5 24.413 22.2366 25.0489 21.7678 25.5178C21.2989 25.9866 20.663 26.25 20 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V10C3.75 9.33696 4.01339 8.70107 4.48223 8.23223C4.95107 7.76339 5.58696 7.5 6.25 7.5H13.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 3.75H26.25V11.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 17.5L26.25 3.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Host>)
    }
}
