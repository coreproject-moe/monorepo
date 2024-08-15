
import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-corner-up-left',
    shadow: true,
    styleUrl: 'coreproject-shape-corner-up-left.css',
})
export class CoreprojectShapeCornerUpLeft {

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
<path d="M11.25 17.5L5 11.25L11.25 5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25 25V16.25C25 14.9239 24.4732 13.6521 23.5355 12.7145C22.5979 11.7768 21.3261 11.25 20 11.25H5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    }

}

    
