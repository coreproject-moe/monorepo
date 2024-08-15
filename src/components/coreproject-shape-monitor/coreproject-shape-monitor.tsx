
import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-monitor',
    shadow: true,
    styleUrl: 'coreproject-shape-monitor.css',
})
export class CoreprojectShapeMonitor {

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
<path d="M25 3.75H5C3.61929 3.75 2.5 4.86929 2.5 6.25V18.75C2.5 20.1307 3.61929 21.25 5 21.25H25C26.3807 21.25 27.5 20.1307 27.5 18.75V6.25C27.5 4.86929 26.3807 3.75 25 3.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 26.25H20" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 21.25V26.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    
    }

}

