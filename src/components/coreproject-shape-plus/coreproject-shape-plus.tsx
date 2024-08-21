
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-plus',
    shadow: true,
    styleUrl: 'coreproject-shape-plus.css',
})
export class CoreprojectShapePlus {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    @Prop() variant: "no-border" | "circle" | "square";

    render(){
        
            if (this.variant === "no-border") {
                return(
                    <Host>
                        <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 6.25V23.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.25 15H23.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </Host>
                );
            }
            

            else if (this.variant === "circle") {
                return(
                    <Host>
                        <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 10V20" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 15H20" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </Host>
                );
            }
            

            else if (this.variant === "square") {
                return(
                    <Host>
                        <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.75 3.75H6.25C4.86929 3.75 3.75 4.86929 3.75 6.25V23.75C3.75 25.1307 4.86929 26.25 6.25 26.25H23.75C25.1307 26.25 26.25 25.1307 26.25 23.75V6.25C26.25 4.86929 25.1307 3.75 23.75 3.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 10V20" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 15H20" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </Host>
                );
            }
            
    }
}
