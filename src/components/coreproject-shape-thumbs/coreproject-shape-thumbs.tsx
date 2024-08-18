import { Component, Host, h, Prop } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-thumbs',
    shadow: true,
    styleUrl: 'coreproject-shape-thumbs.css',
})
export class CoreprojectShapeThumbs {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;
    @Prop() variant: 'up' | 'down' = 'up';

    render() {
        if (this.variant === 'up') {
            return (
                <Host>
                    <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M8.75 27.5H5C4.33696 27.5 3.70107 27.2366 3.23223 26.7678C2.76339 26.2989 2.5 25.663 2.5 25V16.25C2.5 15.587 2.76339 14.9511 3.23223 14.4822C3.70107 14.0134 4.33696 13.75 5 13.75H8.75M17.5 11.25V6.25C17.5 5.25544 17.1049 4.30161 16.4017 3.59835C15.6984 2.89509 14.7446 2.5 13.75 2.5L8.75 13.75V27.5H22.85C23.4529 27.5068 24.038 27.2955 24.4974 26.905C24.9568 26.5145 25.2596 25.9711 25.35 25.375L27.075 14.125C27.1294 13.7667 27.1052 13.4009 27.0042 13.0528C26.9031 12.7048 26.7276 12.3829 26.4898 12.1094C26.252 11.8359 25.9576 11.6174 25.627 11.469C25.2963 11.3206 24.9374 11.2459 24.575 11.25H17.5Z"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </Host>
            );
        } else if (this.variant === 'down') {
            return (
                <Host>
                    <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.2498 2.49996H24.5873C25.2947 2.48745 25.9822 2.73513 26.5191 3.19599C27.056 3.65684 27.405 4.29879 27.4998 4.99996V13.75C27.405 14.4511 27.056 15.0931 26.5191 15.5539C25.9822 16.0148 25.2947 16.2625 24.5873 16.25H21.2498M12.4998 18.75V23.75C12.4998 24.7445 12.8949 25.6984 13.5981 26.4016C14.3014 27.1049 15.2552 27.5 16.2498 27.5L21.2498 16.25V2.49996H7.14979C6.54688 2.49315 5.96182 2.70446 5.50241 3.09496C5.043 3.48545 4.7402 4.02883 4.64979 4.62496L2.92479 15.875C2.87041 16.2333 2.89458 16.5991 2.99562 16.9471C3.09666 17.2952 3.27217 17.6171 3.50997 17.8906C3.74778 18.164 4.04219 18.3825 4.37283 18.5309C4.70346 18.6793 5.06241 18.7541 5.42479 18.75H12.4998Z"
                            stroke="white"
                            stroke-
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </Host>
            );
        }
    }
}
