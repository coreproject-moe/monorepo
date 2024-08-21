
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-file',
    shadow: true,
    styleUrl: 'coreproject-shape-file.css',
})
export class CoreprojectShapeFile {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    @Prop() variant!: "normal" | "minus" | "plus" | "text";


    render(){
        
            if (this.variant === "normal") {
                return(
                    <Host>
                        <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.25 2.5H7.5C6.83696 2.5 6.20107 2.76339 5.73223 3.23223C5.26339 3.70107 5 4.33696 5 5V25C5 25.663 5.26339 26.2989 5.73223 26.7678C6.20107 27.2366 6.83696 27.5 7.5 27.5H22.5C23.163 27.5 23.7989 27.2366 24.2678 26.7678C24.7366 26.2989 25 25.663 25 25V11.25L16.25 2.5Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.25 2.5V11.25H25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </Host>
                );
            }
            

            else if (this.variant === "minus") {
                return(
                    <Host>
                        <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 2.5H7.5C6.83696 2.5 6.20107 2.76339 5.73223 3.23223C5.26339 3.70107 5 4.33696 5 5V25C5 25.663 5.26339 26.2989 5.73223 26.7678C6.20107 27.2366 6.83696 27.5 7.5 27.5H22.5C23.163 27.5 23.7989 27.2366 24.2678 26.7678C24.7366 26.2989 25 25.663 25 25V10L17.5 2.5Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 2.5V10H25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 18.75H18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </Host>
                );
            }
            

            else if (this.variant === "plus") {
                return(
                    <Host>
                        <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 2.5H7.5C6.83696 2.5 6.20107 2.76339 5.73223 3.23223C5.26339 3.70107 5 4.33696 5 5V25C5 25.663 5.26339 26.2989 5.73223 26.7678C6.20107 27.2366 6.83696 27.5 7.5 27.5H22.5C23.163 27.5 23.7989 27.2366 24.2678 26.7678C24.7366 26.2989 25 25.663 25 25V10L17.5 2.5Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 2.5V10H25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 22.5V15" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 18.75H18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </Host>
                );
            }
            

            else if (this.variant === "text") {
                return(
                    <Host>
                        <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 2.5H7.5C6.83696 2.5 6.20107 2.76339 5.73223 3.23223C5.26339 3.70107 5 4.33696 5 5V25C5 25.663 5.26339 26.2989 5.73223 26.7678C6.20107 27.2366 6.83696 27.5 7.5 27.5H22.5C23.163 27.5 23.7989 27.2366 24.2678 26.7678C24.7366 26.2989 25 25.663 25 25V10L17.5 2.5Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 2.5V10H25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 16.25H10" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 21.25H10" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 11.25H11.25H10" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </Host>
                );
            }
            
    }
}
