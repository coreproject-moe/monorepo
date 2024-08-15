
import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-flag',
    shadow: true,
    styleUrl: 'coreproject-shape-flag.css',
})
export class CoreprojectShapeFlag {
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
<path d="M5 18.75C5 18.75 6.25 17.5 10 17.5C13.75 17.5 16.25 20 20 20C23.75 20 25 18.75 25 18.75V3.75C25 3.75 23.75 5 20 5C16.25 5 13.75 2.5 10 2.5C6.25 2.5 5 3.75 5 3.75V18.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 27.5V18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    
    }

}

