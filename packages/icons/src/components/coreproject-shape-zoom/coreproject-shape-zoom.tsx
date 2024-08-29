
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-zoom',
    shadow: true,
    styleUrl: 'coreproject-shape-zoom.css',
})
export class CoreprojectShapeZoom {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    @Prop() variant!: "in" | "out";

    render(){
        if (this.variant === "in") {return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.75 23.75C19.2728 23.75 23.75 19.2728 23.75 13.75C23.75 8.22715 19.2728 3.75 13.75 3.75C8.22715 3.75 3.75 8.22715 3.75 13.75C3.75 19.2728 8.22715 23.75 13.75 23.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.25 26.25L20.8125 20.8125" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.75 10V17.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 13.75H17.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Host>);}
else if (this.variant === "out") {return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.75 23.75C19.2728 23.75 23.75 19.2728 23.75 13.75C23.75 8.22715 19.2728 3.75 13.75 3.75C8.22715 3.75 3.75 8.22715 3.75 13.75C3.75 19.2728 8.22715 23.75 13.75 23.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.25 26.25L20.8125 20.8125" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 13.75H17.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Host>);}
    }
}
