
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';


@Component({
    tag: 'coreproject-shape-globe',
    shadow: true,
    styleUrl: 'coreproject-shape-globe.css',
})
export class CoreprojectShapeGlobe {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.5 15H27.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 2.5C18.1266 5.92294 19.9034 10.365 20 15C19.9034 19.635 18.1266 24.0771 15 27.5C11.8734 24.0771 10.0966 19.635 10 15C10.0966 10.365 11.8734 5.92294 15 2.5V2.5Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Host>)
    }
}
