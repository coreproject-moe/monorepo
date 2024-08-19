
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-trending',
    shadow: true,
    styleUrl: 'coreproject-shape-trending.css',
})
export class CoreprojectShapeTrending {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    @Prop() variant: "up" | "down" = "up";

    render(){
        
            if (this.variant === "up") {
                return(
                    <Host>
                        <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_583_540)">
<path d="M28.75 7.5L16.875 19.375L10.625 13.125L1.25 22.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.25 7.5H28.75V15" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_583_540">
<rect   fill="white"/>
</clipPath>
</defs>
</svg>

                    </Host>
                );
            }
            

            else if (this.variant === "down") {
                return(
                    <Host>
                        <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_583_537)">
<path d="M28.75 22.5L16.875 10.625L10.625 16.875L1.25 7.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.25 22.5H28.75V15" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_583_537">
<rect   fill="white"/>
</clipPath>
</defs>
</svg>

                    </Host>
                );
            }
            
    }
}
