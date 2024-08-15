
import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-move',
    shadow: true,
    styleUrl: 'coreproject-shape-move.css',
})
export class CoreprojectShapeMove {

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
<path d="M6.25 11.25L2.5 15L6.25 18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 6.25L15 2.5L18.75 6.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 23.75L15 27.5L11.25 23.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.75 11.25L27.5 15L23.75 18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 15H27.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 2.5V27.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    }

}

    
