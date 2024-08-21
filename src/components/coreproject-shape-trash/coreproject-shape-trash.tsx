
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-trash',
    shadow: true,
    styleUrl: 'coreproject-shape-trash.css',
})
export class CoreprojectShapeTrash {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    @Prop() variant: "with-lines" | "without-lines";

    render(){
        
            if (this.variant === "with-lines") {
                return(
                    <Host>
                        <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 7.5H6.25H26.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 7.5V5C10 4.33696 10.2634 3.70107 10.7322 3.23223C11.2011 2.76339 11.837 2.5 12.5 2.5H17.5C18.163 2.5 18.7989 2.76339 19.2678 3.23223C19.7366 3.70107 20 4.33696 20 5V7.5M23.75 7.5V25C23.75 25.663 23.4866 26.2989 23.0178 26.7678C22.5489 27.2366 21.913 27.5 21.25 27.5H8.75C8.08696 27.5 7.45107 27.2366 6.98223 26.7678C6.51339 26.2989 6.25 25.663 6.25 25V7.5H23.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 13.75V21.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 13.75V21.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </Host>
                );
            }
            

            else if (this.variant === "without-lines") {
                return(
                    <Host>
                        <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 7.5H6.25H26.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 7.5V5C10 4.33696 10.2634 3.70107 10.7322 3.23223C11.2011 2.76339 11.837 2.5 12.5 2.5H17.5C18.163 2.5 18.7989 2.76339 19.2678 3.23223C19.7366 3.70107 20 4.33696 20 5V7.5M23.75 7.5V25C23.75 25.663 23.4866 26.2989 23.0178 26.7678C22.5489 27.2366 21.913 27.5 21.25 27.5H8.75C8.08696 27.5 7.45107 27.2366 6.98223 26.7678C6.51339 26.2989 6.25 25.663 6.25 25V7.5H23.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </Host>
                );
            }
            
    }
}
