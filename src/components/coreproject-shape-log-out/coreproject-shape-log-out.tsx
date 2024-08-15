
import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-log-out',
    shadow: true,
    styleUrl: 'coreproject-shape-log-out.css',
})
export class CoreprojectShapeLogOut {

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
<path d="M11.25 26.25H6.25C5.58696 26.25 4.95107 25.9866 4.48223 25.5178C4.01339 25.0489 3.75 24.413 3.75 23.75V6.25C3.75 5.58696 4.01339 4.95107 4.48223 4.48223C4.95107 4.01339 5.58696 3.75 6.25 3.75H11.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 21.25L26.25 15L20 8.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.25 15H11.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    }

}

    
