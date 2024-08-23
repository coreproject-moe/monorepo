
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';


@Component({
    tag: 'coreproject-shape-moon',
    shadow: true,
    styleUrl: 'coreproject-shape-moon.css',
})
export class CoreprojectShapeMoon {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.2501 15.9875C26.0535 18.1153 25.2549 20.143 23.9479 21.8335C22.6409 23.524 20.8795 24.8072 18.8698 25.5332C16.86 26.2591 14.6851 26.3977 12.5995 25.9326C10.5139 25.4676 8.60386 24.4182 7.0929 22.9072C5.58194 21.3963 4.53255 19.4862 4.06751 17.4006C3.60247 15.315 3.74102 13.1401 4.46695 11.1304C5.19288 9.12064 6.47616 7.35921 8.16664 6.05219C9.85711 4.74517 11.8849 3.94663 14.0126 3.75C12.7669 5.43533 12.1674 7.51181 12.3233 9.60177C12.4791 11.6917 13.3799 13.6563 14.8619 15.1382C16.3438 16.6202 18.3084 17.521 20.3984 17.6768C22.4883 17.8327 24.5648 17.2332 26.2501 15.9875Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Host>)
    }
}
