
import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-corner',
    shadow: true,
    styleUrl: 'coreproject-shape-corner.css',
})
export class coreprojectShapeCorner {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    @Prop() variant!: "down-right" | "down-left" | "left-down" | "left-up" | "up-left" | "up-right" | "right-up" | "right-down";

    render() {
        return (<Host><svg :class="variant" :height="height" :width="width" :style="cssToJsx(_style)"   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.75 12.5L25 18.75L18.75 25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 5V13.75C5 15.0761 5.52678 16.3479 6.46447 17.2855C7.40215 18.2232 8.67392 18.75 10 18.75H25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Host>);
    }
}