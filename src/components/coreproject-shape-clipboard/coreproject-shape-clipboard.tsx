
import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-clipboard',
    shadow: true,
    styleUrl: 'coreproject-shape-clipboard.css',
})
export class CoreprojectShapeClipboard {
    @Prop() width: string|number;
    @Prop() height: string|number;
    @Prop() _style: string;

    render(){
        
        return(
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 5H22.5C23.163 5 23.7989 5.26339 24.2678 5.73223C24.7366 6.20107 25 6.83696 25 7.5V25C25 25.663 24.7366 26.2989 24.2678 26.7678C23.7989 27.2366 23.163 27.5 22.5 27.5H7.5C6.83696 27.5 6.20107 27.2366 5.73223 26.7678C5.26339 26.2989 5 25.663 5 25V7.5C5 6.83696 5.26339 6.20107 5.73223 5.73223C6.20107 5.26339 6.83696 5 7.5 5H10" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 2.5H11.25C10.5596 2.5 10 3.05964 10 3.75V6.25C10 6.94036 10.5596 7.5 11.25 7.5H18.75C19.4404 7.5 20 6.94036 20 6.25V3.75C20 3.05964 19.4404 2.5 18.75 2.5Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    
    }

}

