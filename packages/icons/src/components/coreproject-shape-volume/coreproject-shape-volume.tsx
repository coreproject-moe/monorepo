
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-volume',
    shadow: true,
    styleUrl: 'coreproject-shape-volume.css',
})
export class CoreprojectShapeVolume {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    @Prop() variant!: "off" | "half" | "full" | "mute";

    render(){
        if (this.variant === "off") {return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.75 6.25L7.5 11.25H2.5V18.75H7.5L13.75 23.75V6.25Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Host>);}
else if (this.variant === "half") {return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.75 6.25L7.5 11.25H2.5V18.75H7.5L13.75 23.75V6.25Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.4248 10.5752C20.5965 11.7472 21.2547 13.3367 21.2547 14.9939C21.2547 16.6512 20.5965 18.2406 19.4248 19.4127" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Host>);}
else if (this.variant === "full") {return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.75 6.25L7.5 11.25H2.5V18.75H7.5L13.75 23.75V6.25Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.8373 6.1626C26.1807 8.50669 27.4971 11.6855 27.4971 15.0001C27.4971 18.3146 26.1807 21.4935 23.8373 23.8376M19.4248 10.5751C20.5965 11.7471 21.2547 13.3366 21.2547 14.9938C21.2547 16.6511 20.5965 18.2406 19.4248 19.4126" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Host>);}
else if (this.variant === "mute") {return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_583_600)">
<path d="M13.75 6.25L7.5 11.25H2.5V18.75H7.5L13.75 23.75V6.25Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28.75 11.25L21.25 18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.25 11.25L28.75 18.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_583_600">
<rect   fill="white"/>
</clipPath>
</defs>
</svg>
</Host>);}
    }
}
