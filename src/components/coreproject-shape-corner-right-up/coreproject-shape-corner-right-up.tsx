
import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-corner-right-up',
    shadow: true,
    styleUrl: 'coreproject-shape-corner-right-up.css',
})
export class CoreprojectShapeCornerRightUp {

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
<path d="M12.5 11.25L18.75 5L25 11.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 25H13.75C15.0761 25 16.3479 24.4732 17.2855 23.5355C18.2232 22.5979 18.75 21.3261 18.75 20V5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    }

}

    
