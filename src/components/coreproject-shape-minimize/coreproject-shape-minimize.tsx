
import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-minimize',
    shadow: true,
    styleUrl: 'coreproject-shape-minimize.css',
})
export class CoreprojectShapeMinimize {

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
<path d="M3.75 20H7.5C8.16304 20 8.79893 20.2634 9.26777 20.7322C9.73661 21.2011 10 21.837 10 22.5V26.25M10 3.75V7.5C10 8.16304 9.73661 8.79893 9.26777 9.26777C8.79893 9.73661 8.16304 10 7.5 10H3.75L10 3.75ZM26.25 10H22.5C21.837 10 21.2011 9.73661 20.7322 9.26777C20.2634 8.79893 20 8.16304 20 7.5V3.75L26.25 10ZM20 26.25V22.5C20 21.837 20.2634 21.2011 20.7322 20.7322C21.2011 20.2634 21.837 20 22.5 20H26.25L20 26.25Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    
    }

}

