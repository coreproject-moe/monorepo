
import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-x-square',
    shadow: true,
    styleUrl: 'coreproject-shape-x-square.css',
})
export class CoreprojectShapeXSquare {
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
<path d="M23.75 3.75H6.25C4.86929 3.75 3.75 4.86929 3.75 6.25V23.75C3.75 25.1307 4.86929 26.25 6.25 26.25H23.75C25.1307 26.25 26.25 25.1307 26.25 23.75V6.25C26.25 4.86929 25.1307 3.75 23.75 3.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.25 11.25L18.75 18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.75 11.25L11.25 18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    
    }

}

