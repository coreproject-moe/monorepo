
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-award',
    shadow: true,
    styleUrl: 'coreproject-shape-award.css',
})
export class CoreprojectShapeAward {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}>
<g clip-path="url(#clip0_582_120)">
<path d="M15 18.75C19.8325 18.75 23.75 14.8325 23.75 10C23.75 5.16751 19.8325 1.25 15 1.25C10.1675 1.25 6.25 5.16751 6.25 10C6.25 14.8325 10.1675 18.75 15 18.75Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.2625 17.3626L8.75 28.7501L15 25.0001L21.25 28.7501L19.7375 17.3501" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_582_120">
<rect width="30" height="30" fill="currentColor"/>
</clipPath>
</defs>
</svg>
</Host>)
    }
}
