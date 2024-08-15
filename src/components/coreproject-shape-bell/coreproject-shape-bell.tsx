
import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-bell',
    shadow: true,
    styleUrl: 'coreproject-shape-bell.css',
})
export class CoreprojectShapeBell {

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
<path d="M22.5 10C22.5 8.01088 21.7098 6.10322 20.3033 4.6967C18.8968 3.29018 16.9891 2.5 15 2.5C13.0109 2.5 11.1032 3.29018 9.6967 4.6967C8.29018 6.10322 7.5 8.01088 7.5 10C7.5 18.75 3.75 21.25 3.75 21.25H26.25C26.25 21.25 22.5 18.75 22.5 10Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.1624 26.25C16.9426 26.6288 16.6272 26.9433 16.2477 27.1619C15.8682 27.3805 15.4379 27.4956 14.9999 27.4956C14.5619 27.4956 14.1316 27.3805 13.7521 27.1619C13.3726 26.9433 13.0572 26.6288 12.8374 26.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    
    }

}

