
import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-minimize-2',
    shadow: true,
    styleUrl: 'coreproject-shape-minimize-2.css',
})
export class CoreprojectShapeMinimize2 {
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
<path d="M5 17.5H12.5V25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25 12.5H17.5V5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 12.5L26.25 3.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.75 26.25L12.5 17.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    
    }

}

