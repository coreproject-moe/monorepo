
import { Component, Host, h, Prop, Watch } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-twitter',
    shadow: true,
    styleUrl: 'coreproject-shape-twitter.css',
})
export class CoreprojectShapeTwitter {

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
<g clip-path="url(#clip0_583_545)">
<path d="M28.75 3.74987C27.553 4.59422 26.2276 5.24001 24.825 5.66237C24.0722 4.79676 23.0717 4.18324 21.9588 3.90478C20.8459 3.62632 19.6744 3.69637 18.6026 4.10544C17.5308 4.51451 16.6106 5.24288 15.9662 6.19202C15.3219 7.14116 14.9846 8.26529 15 9.41237V10.6624C12.8033 10.7193 10.6266 10.2321 8.66376 9.24418C6.70093 8.25622 5.0129 6.79817 3.75 4.99987C3.75 4.99987 -1.25 16.2499 10 21.2499C7.42566 22.9973 4.35895 23.8735 1.25 23.7499C12.5 29.9999 26.25 23.7499 26.25 9.37487C26.2488 9.02669 26.2154 8.67937 26.15 8.33737C27.4258 7.07924 28.326 5.49077 28.75 3.74987V3.74987Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_583_545">
<rect   fill="white"/>
</clipPath>
</defs>
</svg>

            </Host>
        )
    }

}

    
