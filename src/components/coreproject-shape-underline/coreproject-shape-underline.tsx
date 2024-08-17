import { Component, Host, h, Prop, Watch } from '@stencil/core';
import { css_to_jsx } from '$utils/css_to_jsx';

@Component({
    tag: 'coreproject-shape-underline',
    shadow: true,
    styleUrl: 'coreproject-shape-underline.css',
})
export class CoreprojectShapeUnderline {
    @Prop() width: string | number;
    @Prop() height: string | number;
    @Prop() _style: string;

    render() {
        return (
            <Host>
                <svg height={this?.height} width={this?.width} style={css_to_jsx(this?._style)} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.5 3.75V12.5C7.5 14.4891 8.29018 16.3968 9.6967 17.8033C11.1032 19.2098 13.0109 20 15 20C16.9891 20 18.8968 19.2098 20.3033 17.8033C21.7098 16.3968 22.5 14.4891 22.5 12.5V3.75"
                        stroke="white"
                        stroke-
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path d="M5 26.25H25" stroke="white" stroke- stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </Host>
        );
    }
}
