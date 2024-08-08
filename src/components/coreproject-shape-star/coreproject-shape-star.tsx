import { Component, Prop, Host, h } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-star',
    styleUrl: 'coreproject-shape-star.css',
    shadow: true,
})
export class CoreprojectShapeStar {
    @Prop() variant: 'empty' | 'half' | 'full';
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;
    @Prop() fill_color: string;
    svg_element: SVGElement;

    componentDidLoad() {
        this.svg_element.setAttribute('style', this._style);
    }

    render() {
        if (this.variant === 'empty') {
            return (
                <Host>
                    <svg
                        ref={el => (this.svg_element = el as SVGElement)}
                        width={this?.width}
                        height={this?.height}
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15 2.5L18.8625 10.325L27.5 11.5875L21.25 17.675L22.725 26.275L15 22.2125L7.275 26.275L8.75 17.675L2.5 11.5875L11.1375 10.325L15 2.5Z"
                            stroke="currentColor"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </Host>
            );
        } else if (this.variant === 'half') {
            return (
                <Host>
                    <svg
                        ref={el => (this.svg_element = el as SVGElement)}
                        width={this?.width}
                        height={this?.height}
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id="grad">
                                <stop offset="50%" stop-color={this?.fill_color} />
                                <stop offset="50%" stop-color="transparent" />
                            </linearGradient>
                        </defs>
                        <path
                            fill="url(#grad)"
                            d="M15 2.5L18.8625 10.325L27.5 11.5875L21.25 17.675L22.725 26.275L15 22.2125L7.275 26.275L8.75 17.675L2.5 11.5875L11.1375 10.325L15 2.5Z"
                            stroke="currentColor"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </Host>
            );
        } else if (this.variant === 'full') {
            return (
                <Host>
                    <svg
                        ref={el => (this.svg_element = el as SVGElement)}
                        width={this?.width}
                        height={this?.height}
                        viewBox="0 0 30 30"
                        fill={this?.fill_color}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15 2.5L18.8625 10.325L27.5 11.5875L21.25 17.675L22.725 26.275L15 22.2125L7.275 26.275L8.75 17.675L2.5 11.5875L11.1375 10.325L15 2.5Z"
                            stroke="currentColor"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </Host>
            );
        }
    }
}
