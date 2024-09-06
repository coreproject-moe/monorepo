
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-corner',
    shadow: true,
    styleUrl: 'coreproject-shape-corner.scss',
})
export class CoreprojectShapeCorner {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    @Prop() variant!: "down-right" | "down-left" | "left-down" | "left-up" | "up-left" | "up-right" | "right-up" | "right-down";

    render(){
        return(<Host><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} data-marker='4' class={this?.variant}><polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path></svg></Host>)
    }
}
