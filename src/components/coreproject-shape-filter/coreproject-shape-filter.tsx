import { Component, Prop, Host, h } from '@stencil/core';

@Component({
    tag: 'coreproject-shape-filter',
    styleUrl: 'coreproject-shape-filter.css',
    shadow: true,
})
export class CoreprojectShapeFilter {
    @Prop() width: string;
    @Prop() height: string;
    @Prop() _style: string;
    svg_element: SVGElement;

    componentDidLoad() {
        this.svg_element.setAttribute('style', this._style);
    }
    render() {
        return (
            <Host>
                <svg ref={el => (this.svg_element = el as SVGElement)} width={this?.width} height={this?.height} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M18.3332 1.5H1.6665L8.33317 9.38333V14.8333L11.6665 16.5V9.38333L18.3332 1.5Z"
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
