
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-heart',
    shadow: true,
    styleUrl: 'coreproject-shape-heart.css',
})
export class CoreprojectShapeHeart {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}>
<path d="M26.0501 5.76234C25.4117 5.1236 24.6537 4.6169 23.8193 4.2712C22.985 3.92549 22.0908 3.74756 21.1876 3.74756C20.2845 3.74756 19.3903 3.92549 18.556 4.2712C17.7216 4.6169 16.9636 5.1236 16.3251 5.76234L15.0001 7.08734L13.6751 5.76234C12.3855 4.47273 10.6364 3.74823 8.81265 3.74823C6.98886 3.74823 5.23976 4.47273 3.95015 5.76234C2.66053 7.05196 1.93604 8.80105 1.93604 10.6248C1.93604 12.4486 2.66053 14.1977 3.95015 15.4873L5.27515 16.8123L15.0001 26.5373L24.7251 16.8123L26.0501 15.4873C26.6889 14.8489 27.1956 14.0909 27.5413 13.2565C27.887 12.4222 28.0649 11.5279 28.0649 10.6248C28.0649 9.72173 27.887 8.82747 27.5413 7.99315C27.1956 7.15882 26.6889 6.40079 26.0501 5.76234V5.76234Z" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Host>)
    }
}
