
import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-refresh-ccw',
    shadow: true,
    styleUrl: 'coreproject-shape-refresh-ccw.css',
})
export class CoreprojectShapeRefreshCcw {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;
    svg_element: SVGElement;
    

    @Watch('_style')
    watch_Style(newValue: string) {
        if (this.svg_element && newValue) this.svg_element.setAttribute('style', newValue);
    }

    @Watch('height')
    watchHeight(newValue: string) {
        if (this.svg_element && newValue) this.svg_element.setAttribute('height', newValue);
    }

    @Watch('width')
    watchWidth(newValue: string) {
        if (this.svg_element && newValue) this.svg_element.setAttribute('width', newValue);
    }

    render(){
        
        return(
            <Host>
                <svg ref={el => (this.svg_element = el as SVGElement)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_582_441)">
<path d="M1.25 5V12.5H8.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.75 25V17.5H21.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25.6125 11.25C24.9785 9.45845 23.9011 7.85673 22.4807 6.59425C21.0602 5.33176 19.3432 4.44968 17.4896 4.0303C15.6361 3.61091 13.7066 3.6679 11.881 4.19594C10.0555 4.72398 8.39343 5.70586 7.05 7.04997L1.25 12.5M28.75 17.5L22.95 22.95C21.6066 24.2941 19.9445 25.276 18.119 25.804C16.2934 26.332 14.3639 26.389 12.5104 25.9697C10.6568 25.5503 8.93975 24.6682 7.51933 23.4057C6.09892 22.1432 5.02146 20.5415 4.3875 18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_582_441">
<rect   fill="white"/>
</clipPath>
</defs>
</svg>

            </Host>
        )
    
    }

}

