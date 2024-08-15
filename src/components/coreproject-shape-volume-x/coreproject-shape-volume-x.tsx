
import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-volume-x',
    shadow: true,
    styleUrl: 'coreproject-shape-volume-x.css',
})
export class CoreprojectShapeVolumeX {

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
<g clip-path="url(#clip0_583_600)">
<path d="M13.75 6.25L7.5 11.25H2.5V18.75H7.5L13.75 23.75V6.25Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.75 11.25L21.25 18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.25 11.25L28.75 18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_583_600">
<rect   fill="white"/>
</clipPath>
</defs>
</svg>

            </Host>
        )
    
    }

}

