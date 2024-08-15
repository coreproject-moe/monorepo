
import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-edit-2',
    shadow: true,
    styleUrl: 'coreproject-shape-edit-2.css',
})
export class CoreprojectShapeEdit2 {
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
<path d="M21.25 3.74989C21.5783 3.42158 21.9681 3.16116 22.397 2.98348C22.826 2.8058 23.2857 2.71436 23.75 2.71436C24.2143 2.71436 24.674 2.8058 25.103 2.98348C25.5319 3.16116 25.9217 3.42158 26.25 3.74989C26.5783 4.07819 26.8387 4.46795 27.0164 4.8969C27.1941 5.32585 27.2855 5.7856 27.2855 6.24989C27.2855 6.71418 27.1941 7.17393 27.0164 7.60288C26.8387 8.03183 26.5783 8.42158 26.25 8.74989L9.375 25.6249L2.5 27.4999L4.375 20.6249L21.25 3.74989Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    
    }

}

