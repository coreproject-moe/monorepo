
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-download',
    shadow: true,
    styleUrl: 'coreproject-shape-download.css',
})
export class CoreprojectShapeDownload {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    @Prop() variant!: "arrow" | "cloud";


    render(){
        
            if (this.variant === "arrow") {
                return(
                    <Host>
                        <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.25 18.75V23.75C26.25 24.413 25.9866 25.0489 25.5178 25.5178C25.0489 25.9866 24.413 26.25 23.75 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.75 12.5L15 18.75L21.25 12.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 18.75V3.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                    </Host>
                );
            }
            

            else if (this.variant === "cloud") {
                return(
                    <Host>
                        <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_582_228)">
<path d="M10 21.25L15 26.25L20 21.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 15V26.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.1 22.6124C27.1867 21.8482 28.0017 20.7576 28.4266 19.4989C28.8515 18.2401 28.8642 16.8787 28.463 15.6122C28.0617 14.3457 27.2673 13.24 26.1951 12.4556C25.1228 11.6712 23.8285 11.2489 22.5 11.2499H20.925C20.549 9.78476 19.8456 8.42398 18.8676 7.27002C17.8897 6.11606 16.6627 5.19899 15.279 4.58786C13.8953 3.97673 12.391 3.68745 10.8794 3.74181C9.36774 3.79617 7.88812 4.19275 6.55192 4.9017C5.21572 5.61064 4.05776 6.61348 3.16521 7.8347C2.27267 9.05593 1.66879 10.4637 1.39905 11.9521C1.12931 13.4405 1.20074 14.9707 1.60795 16.4274C2.01516 17.8842 2.74755 19.2296 3.74998 20.3624" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_582_228">
<rect   fill="white"/>
</clipPath>
</defs>
</svg>

                    </Host>
                );
            }
            
    }
}
