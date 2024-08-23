
import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';


@Component({
    tag: 'coreproject-shape-key',
    shadow: true,
    styleUrl: 'coreproject-shape-key.css',
})
export class CoreprojectShapeKey {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    

    render(){
        return(<Host><svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)}   viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.3749 9.375L23.7499 5M26.2499 2.5L23.7499 5L26.2499 2.5ZM14.2374 14.5125C14.8828 15.1493 15.3959 15.9075 15.747 16.7435C16.0982 17.5794 16.2806 18.4766 16.2836 19.3833C16.2867 20.29 16.1103 21.1884 15.7647 22.0266C15.4192 22.8649 14.9112 23.6265 14.27 24.2677C13.6289 24.9088 12.8673 25.4168 12.029 25.7624C11.1907 26.108 10.2924 26.2843 9.38565 26.2813C8.47894 26.2782 7.58178 26.0959 6.74584 25.7447C5.9099 25.3935 5.15169 24.8804 4.51485 24.235C3.26252 22.9384 2.56956 21.2017 2.58522 19.3991C2.60088 17.5965 3.32392 15.8722 4.5986 14.5975C5.87328 13.3228 7.59762 12.5998 9.40022 12.5841C11.2028 12.5685 12.9395 13.2614 14.2361 14.5138L14.2374 14.5125ZM14.2374 14.5125L19.3749 9.375L14.2374 14.5125ZM19.3749 9.375L23.1249 13.125L27.4999 8.75L23.7499 5L19.3749 9.375Z" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</Host>)
    }
}
