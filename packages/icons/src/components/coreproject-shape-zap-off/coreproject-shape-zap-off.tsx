
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-zap-off',
    shadow: true,
    styleUrl: 'coreproject-shape-zap-off.css',
})
export class CoreprojectShapeZapOff {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_583_619)">
<path d="M15.5124 8.4375L16.2499 2.5L13.2124 6.15" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M23.2127 16.1375L26.2502 12.5H19.5752" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 10L3.75 17.5H15L13.75 27.5L20 20" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1.25 1.25L28.75 28.75" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_583_619">
<rect   fill="white"/>
</clipPath>
</defs>
</svg>
</Host>)
    }
}
