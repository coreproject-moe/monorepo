
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-chevron',
    shadow: true,
    styleUrl: 'coreproject-shape-chevron.scss',
})
export class CoreprojectShapeChevron {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    @Prop() variant!: "up" | "right" | "down" | "left";

    render(){
        return(<Host><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"  height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} data-marker='0' class={this?.variant}><polyline points="18 15 12 9 6 15"></polyline></svg></Host>)
    }
}
