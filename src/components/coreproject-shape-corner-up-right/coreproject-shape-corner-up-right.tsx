
import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-corner-up-right',
    shadow: true,
    styleUrl: 'coreproject-shape-corner-up-right.css',
})
export class CoreprojectShapeCornerUpRight {

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
<path d="M18.75 17.5L25 11.25L18.75 5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 25V16.25C5 14.9239 5.52678 13.6521 6.46447 12.7145C7.40215 11.7768 8.67392 11.25 10 11.25H25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    }

}

    
