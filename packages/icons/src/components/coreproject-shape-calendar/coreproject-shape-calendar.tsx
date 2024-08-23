
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';


@Component({
    tag: 'coreproject-shape-calendar',
    shadow: true,
    styleUrl: 'coreproject-shape-calendar.css',
})
export class CoreprojectShapeCalendar {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.75 5H6.25C4.86929 5 3.75 6.11929 3.75 7.5V25C3.75 26.3807 4.86929 27.5 6.25 27.5H23.75C25.1307 27.5 26.25 26.3807 26.25 25V7.5C26.25 6.11929 25.1307 5 23.75 5Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 2.5V7.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 2.5V7.5" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.75 12.5H26.25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Host>)
    }
}
