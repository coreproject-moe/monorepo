
import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-trash-2',
    shadow: true,
    styleUrl: 'coreproject-shape-trash-2.css',
})
export class CoreprojectShapeTrash2 {

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
<path d="M3.75 7.5H6.25H26.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 7.5V5C10 4.33696 10.2634 3.70107 10.7322 3.23223C11.2011 2.76339 11.837 2.5 12.5 2.5H17.5C18.163 2.5 18.7989 2.76339 19.2678 3.23223C19.7366 3.70107 20 4.33696 20 5V7.5M23.75 7.5V25C23.75 25.663 23.4866 26.2989 23.0178 26.7678C22.5489 27.2366 21.913 27.5 21.25 27.5H8.75C8.08696 27.5 7.45107 27.2366 6.98223 26.7678C6.51339 26.2989 6.25 25.663 6.25 25V7.5H23.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.5 13.75V21.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.5 13.75V21.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    }

}

    
