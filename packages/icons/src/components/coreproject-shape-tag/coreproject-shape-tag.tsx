
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-tag',
    shadow: true,
    styleUrl: 'coreproject-shape-tag.css',
})
export class CoreprojectShapeTag {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.7375 16.7625L16.775 25.725C16.5428 25.9574 16.2671 26.1418 15.9636 26.2677C15.6601 26.3935 15.3348 26.4582 15.0063 26.4582C14.6777 26.4582 14.3524 26.3935 14.0489 26.2677C13.7454 26.1418 13.4697 25.9574 13.2375 25.725L2.5 15V2.5H15L25.7375 13.2375C26.2031 13.7059 26.4645 14.3395 26.4645 15C26.4645 15.6605 26.2031 16.2941 25.7375 16.7625V16.7625Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.75 8.75H8.7625" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Host>)
    }
}
