
import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-volume-1',
    shadow: true,
    styleUrl: 'coreproject-shape-volume-1.css',
})
export class CoreprojectShapeVolume1 {

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
<path d="M13.75 6.25L7.5 11.25H2.5V18.75H7.5L13.75 23.75V6.25Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.4248 10.5752C20.5965 11.7472 21.2547 13.3367 21.2547 14.9939C21.2547 16.6512 20.5965 18.2406 19.4248 19.4127" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    
    }

}

