
import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-corner-left-down',
    shadow: true,
    styleUrl: 'coreproject-shape-corner-left-down.css',
})
export class CoreprojectShapeCornerLeftDown {

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
<path d="M17.5 18.75L11.25 25L5 18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25 5H16.25C14.9239 5 13.6521 5.52678 12.7145 6.46447C11.7768 7.40215 11.25 8.67392 11.25 10V25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    }

}

    
