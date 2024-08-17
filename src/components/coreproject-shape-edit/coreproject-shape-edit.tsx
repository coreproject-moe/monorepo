
import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-edit',
    shadow: true,
    styleUrl: 'coreproject-shape-edit.css',
})
export class CoreprojectShapeEdit {
    @Prop() width: string|number;
    @Prop() height: string|number;
    @Prop() _style: string;

    render(){
        
        return(
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.75 5H5C4.33696 5 3.70107 5.26339 3.23223 5.73223C2.76339 6.20107 2.5 6.83696 2.5 7.5V25C2.5 25.663 2.76339 26.2989 3.23223 26.7678C3.70107 27.2366 4.33696 27.5 5 27.5H22.5C23.163 27.5 23.7989 27.2366 24.2678 26.7678C24.7366 26.2989 25 25.663 25 25V16.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.125 3.12479C23.6223 2.62751 24.2967 2.34814 25 2.34814C25.7033 2.34814 26.3777 2.62751 26.875 3.12479C27.3723 3.62208 27.6517 4.29653 27.6517 4.99979C27.6517 5.70306 27.3723 6.37751 26.875 6.87479L15 18.7498L10 19.9998L11.25 14.9998L23.125 3.12479Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    
    }

}

