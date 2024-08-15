
import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-rotate-ccw',
    shadow: true,
    styleUrl: 'coreproject-shape-rotate-ccw.css',
})
export class CoreprojectShapeRotateCcw {

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
<g clip-path="url(#clip0_583_454)">
<path d="M1.25 5V12.5H8.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.3875 18.7501C5.19799 21.0505 6.73417 23.0253 8.76457 24.3768C10.795 25.7283 13.2096 26.3833 15.6446 26.2431C18.0797 26.103 20.4032 25.1753 22.2652 23.5998C24.1271 22.0242 25.4266 19.8863 25.9678 17.508C26.509 15.1297 26.2626 12.64 25.2658 10.4139C24.2689 8.18786 22.5757 6.34605 20.441 5.16601C18.3064 3.98598 15.8461 3.53164 13.4308 3.87145C11.0156 4.21127 8.77614 5.32683 7.05 7.05006L1.25 12.5001" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_583_454">
<rect   fill="white"/>
</clipPath>
</defs>
</svg>

            </Host>
        )
    }

}

    
