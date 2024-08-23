
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';


@Component({
    tag: 'coreproject-shape-user',
    shadow: true,
    styleUrl: 'coreproject-shape-user.css',
})
export class CoreprojectShapeUser {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    @Prop() variant!: "normal" | "check" | "minus" | "plus" | "x";

    render(){
        if (this.variant === "normal") {return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25 26.25V23.75C25 22.4239 24.4732 21.1521 23.5355 20.2145C22.5979 19.2768 21.3261 18.75 20 18.75H10C8.67392 18.75 7.40215 19.2768 6.46447 20.2145C5.52678 21.1521 5 22.4239 5 23.75V26.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 13.75C17.7614 13.75 20 11.5114 20 8.75C20 5.98858 17.7614 3.75 15 3.75C12.2386 3.75 10 5.98858 10 8.75C10 11.5114 12.2386 13.75 15 13.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Host>);}
else if (this.variant === "check") {return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_583_569)">
<path d="M20 26.25V23.75C20 22.4239 19.4732 21.1521 18.5355 20.2145C17.5979 19.2768 16.3261 18.75 15 18.75H6.25C4.92392 18.75 3.65215 19.2768 2.71447 20.2145C1.77678 21.1521 1.25 22.4239 1.25 23.75V26.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.625 13.75C13.3864 13.75 15.625 11.5114 15.625 8.75C15.625 5.98858 13.3864 3.75 10.625 3.75C7.86358 3.75 5.625 5.98858 5.625 8.75C5.625 11.5114 7.86358 13.75 10.625 13.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.25 13.75L23.75 16.25L28.75 11.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_583_569">
<rect   fill="white"/>
</clipPath>
</defs>
</svg>
</Host>);}
else if (this.variant === "minus") {return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_583_573)">
<path d="M20 26.25V23.75C20 22.4239 19.4732 21.1521 18.5355 20.2145C17.5979 19.2768 16.3261 18.75 15 18.75H6.25C4.92392 18.75 3.65215 19.2768 2.71447 20.2145C1.77678 21.1521 1.25 22.4239 1.25 23.75V26.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.625 13.75C13.3864 13.75 15.625 11.5114 15.625 8.75C15.625 5.98858 13.3864 3.75 10.625 3.75C7.86358 3.75 5.625 5.98858 5.625 8.75C5.625 11.5114 7.86358 13.75 10.625 13.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.75 13.75H21.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_583_573">
<rect   fill="white"/>
</clipPath>
</defs>
</svg>
</Host>);}
else if (this.variant === "plus") {return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_583_577)">
<path d="M20 26.25V23.75C20 22.4239 19.4732 21.1521 18.5355 20.2145C17.5979 19.2768 16.3261 18.75 15 18.75H6.25C4.92392 18.75 3.65215 19.2768 2.71447 20.2145C1.77678 21.1521 1.25 22.4239 1.25 23.75V26.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.625 13.75C13.3864 13.75 15.625 11.5114 15.625 8.75C15.625 5.98858 13.3864 3.75 10.625 3.75C7.86358 3.75 5.625 5.98858 5.625 8.75C5.625 11.5114 7.86358 13.75 10.625 13.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M25 10V17.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.75 13.75H21.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_583_577">
<rect   fill="white"/>
</clipPath>
</defs>
</svg>
</Host>);}
else if (this.variant === "x") {return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_583_582)">
<path d="M20 26.25V23.75C20 22.4239 19.4732 21.1521 18.5355 20.2145C17.5979 19.2768 16.3261 18.75 15 18.75H6.25C4.92392 18.75 3.65215 19.2768 2.71447 20.2145C1.77678 21.1521 1.25 22.4239 1.25 23.75V26.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.625 13.75C13.3864 13.75 15.625 11.5114 15.625 8.75C15.625 5.98858 13.3864 3.75 10.625 3.75C7.86358 3.75 5.625 5.98858 5.625 8.75C5.625 11.5114 7.86358 13.75 10.625 13.75Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22.5 10L28.75 16.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.75 10L22.5 16.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_583_582">
<rect   fill="white"/>
</clipPath>
</defs>
</svg>
</Host>);}
    }
}
