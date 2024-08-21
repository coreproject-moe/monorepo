
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-box',
    shadow: true,
    styleUrl: 'coreproject-shape-box.css',
})
export class CoreprojectShapeBox {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    


    render(){
        
        return(
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.25 19.9999V9.99988C26.2496 9.56147 26.1338 9.13089 25.9144 8.75133C25.695 8.37177 25.3797 8.05658 25 7.83738L16.25 2.83738C15.87 2.61796 15.4388 2.50244 15 2.50244C14.5612 2.50244 14.13 2.61796 13.75 2.83738L5 7.83738C4.62033 8.05658 4.30498 8.37177 4.08558 8.75133C3.86618 9.13089 3.75045 9.56147 3.75 9.99988V19.9999C3.75045 20.4383 3.86618 20.8689 4.08558 21.2484C4.30498 21.628 4.62033 21.9432 5 22.1624L13.75 27.1624C14.13 27.3818 14.5612 27.4973 15 27.4973C15.4388 27.4973 15.87 27.3818 16.25 27.1624L25 22.1624C25.3797 21.9432 25.695 21.628 25.9144 21.2484C26.1338 20.8689 26.2496 20.4383 26.25 19.9999Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.0874 8.7002L14.9999 15.0127L25.9124 8.7002" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 27.6V15" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </Host>
        )
    
    }
}
