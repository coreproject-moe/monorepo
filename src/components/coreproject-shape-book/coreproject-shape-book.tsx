
import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-book',
    shadow: true,
    styleUrl: 'coreproject-shape-book.css',
})
export class CoreprojectShapeBook {

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
<path d="M5 24.375C5 23.5462 5.32924 22.7513 5.91529 22.1653C6.50134 21.5792 7.2962 21.25 8.125 21.25H25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.125 2.5H25V27.5H8.125C7.2962 27.5 6.50134 27.1708 5.91529 26.5847C5.32924 25.9987 5 25.2038 5 24.375V5.625C5 4.7962 5.32924 4.00134 5.91529 3.41529C6.50134 2.82924 7.2962 2.5 8.125 2.5V2.5Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    }

}

    
