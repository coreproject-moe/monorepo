
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-book',
    shadow: true,
    styleUrl: 'coreproject-shape-book.css',
})
export class CoreprojectShapeBook {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    @Prop() variant: "open" | "close" = "open";

    render(){
        
            if (this.variant === "open") {
                return(
                    <Host>
                        <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 3.75H10C11.3261 3.75 12.5979 4.27678 13.5355 5.21447C14.4732 6.15215 15 7.42392 15 8.75V26.25C15 25.2554 14.6049 24.3016 13.9017 23.5983C13.1984 22.8951 12.2446 22.5 11.25 22.5H2.5V3.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M27.5 3.75H20C18.6739 3.75 17.4021 4.27678 16.4645 5.21447C15.5268 6.15215 15 7.42392 15 8.75V26.25C15 25.2554 15.3951 24.3016 16.0983 23.5983C16.8016 22.8951 17.7554 22.5 18.75 22.5H27.5V3.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </Host>
                );
            }
            

            else if (this.variant === "close") {
                return(
                    <Host>
                        <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 24.375C5 23.5462 5.32924 22.7513 5.91529 22.1653C6.50134 21.5792 7.2962 21.25 8.125 21.25H25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.125 2.5H25V27.5H8.125C7.2962 27.5 6.50134 27.1708 5.91529 26.5847C5.32924 25.9987 5 25.2038 5 24.375V5.625C5 4.7962 5.32924 4.00134 5.91529 3.41529C6.50134 2.82924 7.2962 2.5 8.125 2.5V2.5Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </Host>
                );
            }
            
    }
}
